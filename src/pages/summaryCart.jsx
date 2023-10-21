import { useEffect, useState } from "react";
import axios from "../config/axios";
import CartList from '../features/ProductCategories/CartList';
import { Link } from 'react-router-dom'

export default function SummaryCartPage() {
    const [allCartProduct, setAllCartProduct] = useState([]);
    const [Alltotal, setAllTotal] = useState(0);

    useEffect(() => {
        axios
            .get('/product/productincart')
            .then(res => {
                setAllCartProduct(res.data.showcart);
                setAllTotal(res.data.total.toFixed(2))

            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    const handleCheckOut = async () => {
        try {
            const response = await axios.post('/product/createorder', { allCartProduct })

            if (response.status === 200) {
                alert('CheckOut!!')
            }


        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="bg-gray-100">
            <div className="container mx-auto py-10 flex flex-col items-center">
                <h1 className="text-4xl font-semibold text-center mb-6">Ready to Checkout?</h1>
                <div className="flex justify-center">
                    <CartList allCartProduct={allCartProduct} />
                </div>
                <div className="flex flex-col items-end mt-4 w-[750px] ">
                    <h1 className="text-xl font-bold text-orange-500">All Total</h1>
                    <h1 className="text-xl font-bold">{Alltotal}</h1>
                </div>
                <div className="flex justify-end mt-4 ">
                    <Link to='/PaymentSubmission'>
                        <button className="rounded-xl text-center font-semibold bg-orange-400 hover:bg-orange-200 p-2 text-lg" onClick={handleCheckOut}>CheckOut</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
