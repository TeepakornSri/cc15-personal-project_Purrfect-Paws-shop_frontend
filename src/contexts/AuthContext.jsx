import { createContext, useEffect, useState } from "react";
import axios from '../config/axios'
import { addAccessToken, getAccessToken } from "../utils/local-storage";

export const AuthContext = createContext()

export default function AuthContextProvider({ children }) {
    const [authUser, setAuthUser] = useState(null);
    const [initialLoading, setInitialLoading] = useState(true)

    useEffect(() => {
        if (getAccessToken()) {
            axios.get('/auth/me').then(res => {
                setAuthUser(res.data.user)
            }).finally(() => {
                setInitialLoading(false)
            })
        } else {
            setInitialLoading(false)
        }
    }, []);
    const login = async objuser => {
        const res = await axios.post('/auth/login', objuser)
        addAccessToken(res.data.accessToken)
        setAuthUser(res.data.user)

    }

    const register = async registerInputObject => {
        const res = await axios.post('/auth/regist', registerInputObject)
        addAccessToken(res.data.accessToken)
        setAuthUser(res.data.user)
    }


    return <AuthContext.Provider value={{ login: login, authUser, initialLoading, register }}>{children}</AuthContext.Provider>
}


