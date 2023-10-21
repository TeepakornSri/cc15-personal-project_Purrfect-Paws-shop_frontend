import { Outlet } from "react-router-dom";
import Header from "./Header";
import HeaderBottom from "./HeaderBottom";


export default function Layout() {
    return (
        <>
            <Header />
            <HeaderBottom />
            <Outlet />
        </>
    )
}