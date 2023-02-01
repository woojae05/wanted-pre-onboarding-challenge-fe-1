import "../styles/globals.css";
import type { AppProps } from "next/app";
import React, { useState } from "react";
import Header from "../components/auth/header/Header";
import { AuthContext } from "../context/auth/AuthContext";
import { AuthDataType } from "../types/Auth.type";

export default function App({ Component, pageProps }: AppProps) {
  const [auth, setAuth] = useState(false);
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      <Header />
      <Component {...pageProps} />
    </AuthContext.Provider>
  );
}
