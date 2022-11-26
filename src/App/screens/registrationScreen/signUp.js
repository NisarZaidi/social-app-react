import React, { useState } from "react";
import { Header } from "../../components";
import "./style.css"

import {
    Link,
} from "react-router-dom";

export const SignUp = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [userName, setUserName] = useState("")
    const [fatherName, setFatherName] = useState("")
    const [dateOfBirth, setDateOfBirth] = useState("")
    const [profileImage, setProfileImage] = useState("")

    const onSubmit = () => {
        console.log(
            email,
            password,
            confirmPassword,
            userName,
            fatherName,
            dateOfBirth,
            profileImage
        )

    }
    return (
        <>
            <Header />
            <div className="form">
                <h2 className="heading">Sign Up</h2>
                <label>Email</label>
                <br />
                <input placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <br />
                <label>Password</label>
                <br />
                <input placeholder="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <br />
                <label>Confirm Password</label>
                <br />
                <input placeholder="Confirm password" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                <br />
                <label>User name</label>
                <br />
                <input placeholder="User name" value={userName} onChange={(e) => setUserName(e.target.value)} />
                <br />
                <label>Father name</label>
                <br />
                <input placeholder="father name" value={fatherName} onChange={(e) => setFatherName(e.target.value)} />
                <br />
                <label>Date of birth</label>
                <br />
                <input placeholder="date of birth" type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
                <br />
                <label>Profile Image</label>
                <br />
                <input placeholder="upload" type="file" />
                <br />
                <button onClick={() => onSubmit()}>Sign Up</button>
                <br />
                <span>Allready have account
                    <Link to="/login">click here</Link>
                </span>
            </div>
        </>

    )
}