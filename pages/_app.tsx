import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import Header from "../components/auth/header/Header";

export default function App({ Component, pageProps }: AppProps) {
  const MyStore = React.createContext(false);
  return (
    <MyStore.Provider value>
      <Header />
      <Component {...pageProps} />
    </MyStore.Provider>
  );
}
