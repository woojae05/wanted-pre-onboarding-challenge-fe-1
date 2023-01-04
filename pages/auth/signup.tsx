import React from "react";
import styled from "styled-components";
import SignUp from "../../components/auth/signup/signup";

const SignUpPage = () => {
  return (
    <Container>
      <h1>회원가입</h1>
      <SignUp />
    </Container>
  );
};

export default SignUpPage;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
