import { Link } from "react-router-dom";

export default function AdminLeft() {
    return (
        <div className="w-60 h-screen border shadow-2xl">
            <div className="flex flex-col justify-start gap-4 pt-8 pl-4 text-xl font-semibold">
                <Link to='/'>
                    <button className="hover:text-blue-700">Home</button>
                </Link>
                <Link to='/admin/product'>
                    <button className="hover:text-blue-700">Product</button>
                </Link>
                <Link to='/admin/category'>
                    <button className="hover:text-blue-700">Category</button>
                </Link>
                <Link to='/admin/orders'>
                    <button className="hover:text-blue-700">Orders</button>
                </Link>
                <Link to='/admin/alluser'>
                    <button className="hover:text-blue-700">User</button>
                </Link>
            </div>
        </div>
    )
}
