import { useRouter } from "next/router";
import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AuthContext } from "../../../context/auth/AuthContext";
import { IFormInput } from "../../../types/Form/Form.type";
import customAxios from "../../../lib/customAxios";


export const useLogin = () => {

    const router = useRouter();
    const { setAuth } = useContext(AuthContext);

    const login: SubmitHandler<IFormInput> = async (data) => {
        const {
            data: { token, message },
        } = await customAxios.post("/users/login", data);
        localStorage.setItem("token", token);
        setAuth(true);
        alert(message);
        router.push("/");
    };
    return {
        login
    }

}