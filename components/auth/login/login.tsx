import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { useLogin } from "./useLogin.hooks";
import { IFormInput } from "../../../types/Form/Form.type";
import { useForm, SubmitHandler } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid },
  } = useForm<IFormInput>();

  const { loginPostMutate } = useLogin();

  return (
    <LoginFormContainer
      onSubmit={handleSubmit(({ email, password }) => {
        loginPostMutate({ email, password });
      })}
    >
      <input
        type="text"
        {...register("email", { required: "이메일은 필수 입력입니다." })}
        placeholder={"test@gmail.com"}
      />
      <input
        type="password"
        {...register("password")}
        placeholder={"********"}
      />
      <input type="submit" value={"로그인"} disabled={!isDirty || !isValid} />
    </LoginFormContainer>
  );
};

export default Login;

const LoginFormContainer = styled.form`
  height: 200px;
  display: flex;
  flex-direction: column;
  width: 200px;
  align-items: center;
  justify-content: space-around;
  input {
    padding-left: 5px;
    width: 240px;
    height: 30px;
    margin-bottom: 10px;
  }
  input[type="submit"] {
    width: 200px;
    font-size: 16px;
    color: white;
  }

  input[aria-invalid="false"] {
    border: 1px solid green;
  }

  input[aria-invalid="true"] {
    border: 1px solid red;
  }
`;
