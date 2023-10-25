import { Outlet } from "react-router-dom";
import AdminLeft from "../features/Admin/AdminLeft";




export default function Layout() {
    return (
        <div className="flex">
            <AdminLeft />
            <Outlet />
        </div>
    )
}