import { useRouter } from "next/router";
import { useContext } from "react";
import { AuthContext } from "../../../context/auth/AuthContext";
import { IFormInput } from "../../../types/Form/Form.type";
import { useMutation } from "react-query"
import { userApi } from "../../../util/api/usersApi";
import CustomError_Class from "../../../types/Error.type";

export const useLogin = () => {

    const router = useRouter();
    const { setAuth } = useContext(AuthContext);

    const { mutate: loginPostMutate, } = useMutation(userApi.loginApi, {

        onSuccess: ({ token, message }) => {
            localStorage.setItem("token", token);
            setAuth(true);
            alert(message);
            router.push("/");
        },
        onError: (error: unknown) => {

        }
    })


    return {
        loginPostMutate
    }

}