import React from "react";
import {
    Link,
  } from "react-router-dom";
export const HomeScreen = () => {
    return(
        <>
        <h1>Home Screen</h1>
        <Link to="profile">My Profile</Link>
        </>
    )
}