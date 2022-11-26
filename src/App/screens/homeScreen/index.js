import React from "react";
import { Header } from "../../components";


export const HomeScreen = () => {
    return (
        <>
        <Header
        isHomeBtn = {false}
        isTimeLineBtn = {true}
        isProfileBtn = {true}
        isFriendBtn = {true}
        isChatBtn = {true}
        isLoginBtn = {true}
        />
        <h1>DashBoard</h1>
        </>
    )
}