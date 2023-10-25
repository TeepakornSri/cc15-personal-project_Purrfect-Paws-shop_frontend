import Menu from "./Menu";
import img from '../assets/FullLogo_Transparent_NoBuffer.PNG'
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";
import axios from "../config/axios";
import { useAuth } from "../hooks/use-auth";

export default function Header() {
    const [isAdmin, setIsAdmin] = useState(false)

    // useEffect(() => {
    //     axios.get('/auth/me')
    //         .then(res => {
    //             if (res.data.user.role === "ADMIN") {
    //                 setIsAdmin(true);
    //             }
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         });
    // }, [setIsAdmin]);

    const { authUser } = useAuth()


    useEffect(() => {
        if (authUser) {
            if (authUser.role === "ADMIN") {
                setIsAdmin(true);
            }
        }
    }, [authUser])
    return (
        <header className="bg-orange-500 flex shadow-xl sticky top-0 items-center justify-evenly z-50">
            <div className="flex justify-center items-center gap-10 flex-shrink-0">
                <div className="py-2 justify-self-start w-[100px] cursor-pointer">
                    <Link to='/'>
                        <img src={img} alt="shop-logo" />
                    </Link>
                </div>
                <h1 className="text-4xl font-semibold text-white">PURRFECT PAWS SHOP</h1>
            </div>
            <div>
                <input type="text" placeholder="Search for..." className="w-[400px] outline-none p-2 rounded-2xl border focus:ring-2 focus:border-blue-500 cursor-text" />
            </div>
            <div>
                <Menu />
            </div>
            {isAdmin && (
                <div className="absolute top-2 right-8 bg-green-700 hover:bg-green-500 rounded-full text-white font-bold">
                    <Link to='/admin'>
                        <button className="w-20 h-20 border rounded-full">Admin Page</button>
                    </Link>
                </div>
            )}
        </header>
    )
}
