import { Link } from "react-router-dom";

export default function HeaderBottom() {
    return (
        <div className="flex flex-row mt-6 mb-6 gap-4 justify-center items-center">
            <Link to='/' className="border border-black p-2 rounded-3xl text-sm cursor-pointer hover:bg-orange-500 hover:text-white font-semibold w-[140px] text-center">
                <span >Home</span>
            </Link>
            <span className="border border-black p-2 rounded-3xl text-sm cursor-pointer hover:bg-orange-500 hover:text-white font-semibold w-[140px] text-center">Product Catagery</span>
            <span className="border border-black p-2 rounded-3xl text-sm cursor-pointer hover:bg-orange-500 hover:text-white font-semibold w-[140px] text-center">Product Catagery</span>
            <span className="border border-black p-2 rounded-3xl text-sm cursor-pointer hover:bg-orange-500 hover:text-white font-semibold w-[140px] text-center">Product Catagery</span>
            <Link to='order'>
                <span className="border border-black p-2 rounded-3xl text-sm cursor-pointer hover:bg-orange-500 hover:text-white font-semibold w-[140px] text-center">My Order</span>
            </Link>
            <Link to='PaymentSubmission'>
                <span className="border border-black p-2 rounded-3xl text-sm cursor-pointer hover:bg-orange-500 hover:text-white font-semibold ">Payment Submission</span>
            </Link>
        </div>
    )
}