import {useContext, useState} from "react";
import {AuthContext} from "../context/context";

export const useFetchingHook = (callback) => {

    const {isAuth, setIsAuth} = useContext(AuthContext);

    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    const fetching = async (...args) => {
        try {
            setIsLoading(true)
            await callback(...args)
        } catch (e) {
            if(e.response.status === 401) {
                window.localStorage.setItem("auth_token", "")
                setIsAuth(false);
                console.log(e.response.status + "ПЕРЕВІРКА РОБОТИ ПОМИЛОК,,,,")
            }

            setError(e.message)
        } finally {
            setIsLoading(false)

        }

    }

    return [fetching, isLoading, error]
}