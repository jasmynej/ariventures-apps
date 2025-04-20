import { useState } from "react";
import {useNavigate} from "react-router";
import {supabase} from "../lib/supabaseDb.ts";
import "../styles/auth.css"
import logo from '../assets/ariventures_logo.png'
import * as React from "react";

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
       <div className="flex w-screen h-screen">

           <div className="flex flex-col w-2/5 p-4  justify-center bg-orange-50">
               <img src={logo} className="w-72 m-2" alt="ariventures logo"/>
               <div className="m-2">
                   <h2 className="uppercase font-light text-2xl">Login</h2>
                   <form className="bg-white p-4 my-4 rounded drop-shadow">
                       {errorMsg && <div className="text-red-500">{errorMsg}</div>}
                       <div className="flex flex-col gap-2 p-2">
                           <label>Email</label>
                           <input type="email"
                                  className="border p-2 rounded border-stone-300"
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}/>
                       </div>
                       <div className="flex flex-col gap-2 p-2">
                           <label>Password</label>
                           <input type="password"
                                  className="border p-2 rounded border-stone-300"
                                  value={password}
                                  onChange={(e) => setPassword(e.target.value)}/>
                       </div>
                       <button className="bg-pink-200 p-2 w-full hover:bg-pink-300 rounded"
                               onClick={(e) => handleLogin(e)}>Login
                       </button>
                   </form>
                   <p>Don't have an account? <span className="underline" onClick={() => navigate("/sign-up")}>Sign Up</span></p>
               </div>

           </div>
           <div className="w-3/5 auth-login-bg">

           </div>
       </div>
    )
}

export default LoginPage;