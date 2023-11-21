import { useEffect, useState } from "react";
import AdminOrderList from "./AdminOrderList";
import axios from "../../config/axios";
import AdminOrderItem from "./AdminOrderItem";

export default function AdminOrders() {
    const [allOrder, setallOrder] = useState([])
    useEffect(() => {
        axios
            .get('/product/allorders')
            .then(res => {
                setallOrder(res.data.Orders)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const [allOrderItem, setallOrderItem] = useState([])
    useEffect(() => {
        axios
            .get('/product/getAllOrderItem')
            .then(res => {
                setallOrderItem(res.data.orderitems)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    return (
        <div className="flex flex-col w-full mt-4 max-h-[900px] overflow-y-auto ">
            <div className="flex w-full flex-col p-4">
                <h1 className="text-2xl font-semibold p-4">Orders</h1>
                <AdminOrderList allOrder={allOrder} />
            </div>
            <div className="">
                <h1 className="text-2xl font-semibold p-4">Order Items</h1>
                <AdminOrderItem allOrderItem={allOrderItem} />
            </div>
        </div>
    )
}
