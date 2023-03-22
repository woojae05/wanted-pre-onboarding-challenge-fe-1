import { useMutation } from "react-query"
import { useRouter } from "next/router";
import { userApi } from "../../../util/api/usersApi";



export const useSignUp = () => {
    const router = useRouter()
    const { mutate: signUpMutate, } = useMutation(userApi.signUpApi, {
        onSuccess: () => {
            router.push("/auth/login");
        },
        onError: (error: unknown) => {

        }
    })
    return {
        signUpMutate
    }
}