import { useState } from "react";
import {useNavigate} from "react-router";
import {supabase} from "../lib/supabaseDb.ts";
import "../styles/auth.css"

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            setErrorMsg(error.message);
        } else {
            navigate("/admin");
        }
    };


    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form
                onSubmit={handleLogin}
                className="bg-white p-8 rounded shadow-md w-full max-w-sm"
            >
                <h1 className="text-2xl font-bold mb-4">Log in to Admin</h1>

                {errorMsg && (
                    <p className="text-red-500 text-sm mb-3">{errorMsg}</p>
                )}

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input
                        type="email"
                        className="border border-gray-300 p-2 w-full rounded"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Password</label>
                    <input
                        type="password"
                        className="border border-gray-300 p-2 w-full rounded"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-pink-300 hover:bg-pink-500 text-white py-2 rounded"
                >
                    Log In
                </button>
            </form>
        </div>
    )
}

export default LoginPage;