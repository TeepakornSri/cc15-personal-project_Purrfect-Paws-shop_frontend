import { createContext, useEffect, useState } from "react";
import axios from '../config/axios'
import { addAccessToken, getAccessToken, removeAccessToken } from "../utils/local-storage";
import Swal from 'sweetalert2'

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
        const res = await axios.post('/auth/register', registerInputObject)
        if (res.status === 201) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Register success",
                showConfirmButton: false,
                timer: 1500
            });
        }
        addAccessToken(res.data.accessToken)
        setAuthUser(res.data.user)
    }

    const logout = () => {
        removeAccessToken()
        setAuthUser(null)
    }

    const updateprofile = async updateprofileInputObject => {
        const res = await axios.patch('/auth/updateprofile', updateprofileInputObject)
        if (res.status === 201) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "success",
                showConfirmButton: false,
                timer: 1500
            });
            setTimeout(() => {
                window.location.reload();
            }, 1500);
        } else {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Oops Something wrong...",
                showConfirmButton: false,
                timer: 1500
            });
        }
        setAuthUser(res.data.user)
    }

    const showallproduct = async showallproductObj => {
        const res = await axios.get('/product/showallproduct', showallproductObj)
    }


    const uploadPayment = async (data) => {
        const res = await axios.patch('/product/uploadImg', data)
        if (res.status === 200) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "success",
                showConfirmButton: false,
                timer: 1500
            });
            setTimeout(() => {
                window.location.reload();
            }, 1500);
        }
    }
    const uploadproductimg = async (data) => {
        const res = await axios.patch('/product/uploadproductimg', data)
        if (res.status === 200) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "success",
                showConfirmButton: false,
                timer: 1500
            });
            setTimeout(() => {
                window.location.reload();
            }, 1500);
        }
    }

    const checkOut = async () => {
        try {
            const res = await axios.patch('/product/createorder')
            if (res.status === 200) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Checkout success",
                    showConfirmButton: false,
                    timer: 1500
                });
                setTimeout(() => {
                    window.location.reload();
                }, 1500);
            }
        } catch (err) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Oops Something wrong...",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }

    return <AuthContext.Provider value={{ login: login, authUser, initialLoading, register, logout, updateprofile, showallproduct, uploadPayment, checkOut, uploadproductimg }}>{children}</AuthContext.Provider>
}



