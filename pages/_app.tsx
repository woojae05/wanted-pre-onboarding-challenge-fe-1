import "../styles/globals.css";
import type { AppProps } from "next/app";
import React, { useState } from "react";
import Header from "../components/auth/header/Header";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { AuthContext } from "../context/auth/AuthContext";
import ErrorBoundary from "../components/common/ErrorBoundary";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  const [auth, setAuth] = useState(false);
  return (
    <QueryClientProvider client={client}>
      <AuthContext.Provider value={{ auth, setAuth }}>
        <ReactQueryDevtools initialIsOpen={true} />
        <ErrorBoundary fallback={<></>}>
          <Header />
          <Component {...pageProps} />
        </ErrorBoundary>
      </AuthContext.Provider>
    </QueryClientProvider>
  );
}
