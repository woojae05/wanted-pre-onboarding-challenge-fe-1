import { useRouter } from "next/navigation";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";
import customAxios from "../../../lib/customAxios";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors, isDirty, isSubmitSuccessful },
  } = useForm<IFormInput>();
  const router = useRouter();

  interface IFormInput {
    email: string;
    password: string;
  }

  const signUp: SubmitHandler<IFormInput> = async (data) => {
    try {
      await customAxios.post("/users/create", data);
      router.push("/auth/login");
    } catch (error: any) {
      alert(error.response.data.details);
      console.log(error);
    }
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(signUp)}>
        <div>
          <input
            aria-invalid={
              !isDirty ? undefined : errors.email ? "true" : "false"
            }
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
        </div>
        <div>
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
            aria-invalid={
              !isDirty ? undefined : errors.password ? "true" : "false"
            }
          />
          {errors.password && (
            <small role="alert">{errors.password.message}</small>
          )}
        </div>
        <input type="submit" disabled={isSubmitSuccessful} value={"회원가입"} />
      </form>
    </Wrapper>
  );
};

export default SignUp;

const Wrapper = styled.div`
  form {
    height: 200px;
    display: flex;
    flex-direction: column;
    width: 200px;
    align-items: center;
    justify-content: space-around;
  }

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

  small {
    color: #ef4c4c;
  }
`;
