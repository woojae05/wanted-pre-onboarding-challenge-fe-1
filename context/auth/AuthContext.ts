import React, { Dispatch, SetStateAction } from "react";

export interface IAuthContext {
    auth: boolean
    setAuth: (auth: boolean) => void
}
const initalAuthData = {
    auth: false,
    setAuth: () => { }
}

export const AuthContext = React.createContext<IAuthContext>(initalAuthData);