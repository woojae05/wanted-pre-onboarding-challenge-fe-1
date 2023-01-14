import React, { useEffect, useState } from "react";
import styled from "styled-components";
import customAxios from "../../../lib/customAxios";
import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  email: string;
  password: string;
}

const Login = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid },
  } = useForm<IFormInput>();

  const login: SubmitHandler<IFormInput> = async (data) => {
    try {
      const {
        data: { token, message },
      } = await customAxios.post("/users/login", data);
      localStorage.setItem("token", token);
      alert(message);
      router.push("/");
    } catch (error: any) {
      alert(error.response.data.details);
    }
  };

  return (
    <LoginForm onSubmit={handleSubmit(login)}>
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
    </LoginForm>
  );
};

export default Login;

const LoginForm = styled.form`
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
