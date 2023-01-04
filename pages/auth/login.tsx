import React from "react";
import Login from "../../components/auth/login/login";
import styled from "styled-components";

const LoginPage = () => {
  return (
    <Container>
      <h1>로그인</h1>
      <Login />
    </Container>
  );
};

export default LoginPage;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
