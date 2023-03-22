import customAxios from "../../lib/customAxios";
import { apiPath } from "../apiPath";

type inputKeys = "email" | "password"
type loginParmType = Record<inputKeys, string>
type signUParmType = Record<inputKeys, string>

interface ApiResponse {
    data: {}
}

interface loginResponse {
    token: string
    message: string
}

const loginApi = async (parm: loginParmType) => {
    const path = apiPath.users.login();
    return (await customAxios.post<loginResponse>(path, parm)).data;
}
const signUpApi =
    async (parm: signUParmType) => {
        const path = apiPath.users.signUp();
        return (await customAxios.post<void>(path, parm)).data;
    }

export const userApi = {
    loginApi,
    signUpApi
}