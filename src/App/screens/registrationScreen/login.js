import React, {useState} from "react";
import "./style.css"
import {
    Link,
} from "react-router-dom";

import { Header } from "../../components";

export const Login = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const onSubmit = () => {
        console.log(email,password)

    }
    return (
        <>
            <Header />
            <div className="form">
                <h2 className="heading">Sign In</h2>
                <label>Email</label>
                <br />
                <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <br />
                <label>Password</label>
                <br />
                <input placeholder="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <br />
                <button onClick={() => onSubmit()}>Login</button>
                <br />
                    <Link to="/signup">create an account</Link>
            </div>
        </>
    )
}