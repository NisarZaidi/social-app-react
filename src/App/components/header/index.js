import React from "react";
import "./style.css"
import {useNavigate} from "react-router-dom"

export const Header = (props) => {
    const navigate = useNavigate()
    const {
        isHomeBtn = false,
        isTimeLineBtn = false,
        isProfileBtn = false,
        isFriendBtn = false,
        isChatBtn = false,
        isLoginBtn = false,
    } = props
    return (
        <>
            <div className="nav">
                    <h1 className="header">Social Chat App</h1>
                <div className="nav_btns">
                    {isHomeBtn && <button>Home</button>}
                    {isTimeLineBtn && <button>Timeline</button>}
                    {isProfileBtn && <button>Profile</button>}
                    {isFriendBtn && <button>Friends</button>}
                    {isChatBtn && <button>Chats</button>}
                    {isLoginBtn && <button onClick={() => navigate("/login")}>Login</button>}
                </div>
            </div>
        </>
    )
}