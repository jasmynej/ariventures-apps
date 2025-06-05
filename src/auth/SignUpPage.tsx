import { useState } from "react";
import {useNavigate} from "react-router";
import {supabase} from "../lib/supabaseDb.ts";
import "../styles/auth.css"
import * as React from "react";

function SignUpPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const navigate = useNavigate();

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();

        const { error } = await supabase.auth.signUp({
            email,
            password,
        });

        if (error) {
            setErrorMsg(error.message);
        } else {
            navigate("/");
        }
    }

    return (
        <div className="flex w-screen h-screen">
            <div className="flex flex-col w-2/5 p-4  justify-center bg-isabelline-100">

                <div className="w-1/2 bg-[url(/src/assets/ariventures_logo.png)] bg-cover bg-center bg-no-repeat h-24"
                     onClick={() => navigate("/")}
                ></div>

                <div className="m-2">
                    <h2 className="uppercase font-light text-2xl">Sign up</h2>
                    <form className="bg-white p-4 my-4 rounded drop-shadow">
                        {errorMsg && <div className="text-tea-rose-800">{errorMsg}</div>}
                        <div className="flex flex-col gap-2 p-2">
                            <label>Email</label>
                            <input type="email"
                                   className="border p-2 rounded border-stone-300"
                                   value={email}
                                   onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="flex flex-col gap-2 p-2 ">
                            <label>Password</label>
                            <input type="password"
                                   className="border p-2 rounded border-stone-300"
                                   value={password}
                                   onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button className="bg-tea-rose-500 p-2 w-full hover:bg-tea-rose-600 transition ease-in duration-200" onClick={(e) => handleSignUp(e)}>Sign Up</button>
                    </form>
                    <p>Already have an account? <span className="underline" onClick={() => navigate("/login")}>Login</span></p>
                </div>

            </div>
            <div className="w-3/5 auth-signup-bg">

            </div>
        </div>
    )
}

export default SignUpPage;