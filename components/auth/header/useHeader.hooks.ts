import React, { useEffect, useState, useContext } from "react";
import { AuthContext, IAuthContext } from "../../../context/auth/AuthContext";
import styled from "styled-components";
import Link from "next/link";

export const useHeader = () => {
    const { auth, setAuth }: IAuthContext = useContext(AuthContext);

    const logout = () => {
        localStorage.removeItem("token");
        setAuth(false);
    }
    return {
        isLogin: auth,
        logout
    }
}
