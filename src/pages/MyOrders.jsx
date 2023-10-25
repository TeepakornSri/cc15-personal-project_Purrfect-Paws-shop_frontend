import axios from "../config/axios"
import { useEffect, useState } from "react"
import Orderlist from "../features/Order/orderlist"


export default function MyOrders() {
    const [myOrder, setMyOrder] = useState([])


    useEffect(() => {
        axios
            .get('/product/myorder')
            .then(res => {
                setMyOrder(res.data.MyOrder)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])



    return (
        <div className="w-full flex justify-center items-start h-screen ">
            <div className="flex w-[800px] justify-center items-start h-screen overflow-y-auto p-4 shadow-lg rounded-2xl">
                <Orderlist myOrder={myOrder} />
            </div>
        </div>
    )
}
