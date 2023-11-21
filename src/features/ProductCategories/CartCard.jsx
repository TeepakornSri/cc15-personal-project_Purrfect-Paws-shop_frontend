import { useEffect, useState } from "react";
import axios from "../../config/axios";
import { BiTrash } from "react-icons/bi";
import Swal from 'sweetalert2'

export default function CartCard({ allCartProduct }) {
    const [newAmount, setNewAmount] = useState(allCartProduct.amount);


    const increaseAmount = async () => {
        try {
            setNewAmount(newAmount + 1);
            const response = await axios.patch("/product/updateAmountInCart", {
                productId: allCartProduct.product.id,
                Id: allCartProduct.id,
                newAmount: newAmount + 1,
            });

            window.location.reload()
        } catch (error) {
            console.log(error);
        }

    };
    const decreaseAmount = async () => {
        try {
            if (newAmount === 0) {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Amount cannot below 0",
                    showConfirmButton: false,
                    timer: 1500
                });
                return
            } else {
                setNewAmount(newAmount - 1);
                const response = await axios.patch("/product/updateAmountInCart", {
                    productId: allCartProduct.product.id,
                    Id: allCartProduct.id,
                    newAmount: newAmount - 1,

                });

            }
            window.location.reload()
        } catch (error) {
            console.log(error);
        }

    };



    const handleDelete = async () => {
        try {
            const response = await axios.delete(`/product/deleteProductInCart/${allCartProduct.id}`);
            if (response.status === 200) {

                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Deleted Product In Cart",
                    showConfirmButton: false,
                    timer: 1500
                });
                setTimeout(() => {
                    window.location.reload();
                }, 1500);
            }
        } catch (err) {
            console.log(err);
        }
    }




    const total = (allCartProduct.product.price * newAmount).toFixed(2);

    return (
        <div className="flex justify-evenly shadow-lg rounded-md">
            <div className="flex">
                <div className="w-32 p-2">
                    <img src={allCartProduct.product.productImg} alt="Product" />
                </div>
            </div>
            <div className="flex items-center flex-1 ml-6 gap-24">
                <div>
                    {allCartProduct.product.productName}
                </div>
                <div className="flex flex-col items-center">
                    <div>Price</div>
                    <div>{allCartProduct.product.price}</div>
                </div>
                <div className="flex flex-col items-center">
                    <div><h1>Quantity</h1></div>
                    <div className="flex gap-2">
                        <button
                            className="w-10 rounded-xl text-center font-bold bg-orange-400 hover:bg-orange-200"
                            onClick={decreaseAmount}
                        >
                            -
                        </button>
                        <h1>{newAmount}</h1>
                        <button
                            className="w-10 rounded-xl text-center font-bold bg-orange-400 hover:bg-orange-200"
                            onClick={increaseAmount}
                        >
                            +
                        </button>
                    </div>
                </div>
                <div className="flex flex-col items-center p-4 gap-4">
                    <div><h1>Total</h1></div>
                    <div>{total}฿</div>
                    <button className="text-base text-red-400 hover:text-black" onClick={handleDelete}><BiTrash /></button>
                </div>
            </div>
        </div>
    );
}
