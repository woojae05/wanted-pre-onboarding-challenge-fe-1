import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, errors },
  } = useForm<IFormInput>();

  interface IFormInput {
    email: string;
    password: string;
  }

  const onSubmit: SubmitHandler<IFormInput> = ({ email, password }) => {};

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="test@gmail.com"
          {...register("email", {
            required: "이메일은 필수 입력입니다.",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "이메일 형식에 맞지 않습니다.",
            },
          })}
        />
        {errors.email && <small role="alert">{errors.email.message}</small>}
        <input
          type={"password"}
          placeholder="************"
          {...register("password", {
            required: "비밀번호는 필수 입력입니다.",
            minLength: {
              value: 8,
              message: "8자리 이상 비밀번호를 사용하세요.",
            },
          })}
          aria-invalid={false}
        />
        {errors.password && (
          <small role="alert">{errors.password.message}</small>
        )}
        <input type="submit" disabled={isSubmitting} />
      </form>
    </Wrapper>
  );
};

export default SignUp;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;

  input {
    width: 200px;
    margin-bottom: 10px;
  }
  input[type="submit"] {
    width: 200px;
    color: white;
  }
`;
