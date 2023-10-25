import { Outlet } from "react-router-dom";
import Header from "./Header";
import HeaderBottom from "./HeaderBottom";
import Footer from "./Footer";


export default function Layout() {
    return (
        <>
            <Header />
            <HeaderBottom />
            <Outlet />
            <Footer />
        </>
    )
}