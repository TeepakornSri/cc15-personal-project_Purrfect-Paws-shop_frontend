import { useEffect, useState } from "react";
import axios from "../../config/axios";
import { BiTrash } from "react-icons/bi";

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

            if (response.status === 200) {
                alert("Amount updated successfully");
            }
            window.location.reload()
        } catch (error) {
            console.log(error);
        }

    };
    const decreaseAmount = async () => {
        try {
            const response = await axios.patch("/product/updateAmountInCart", {
                productId: allCartProduct.product.id,
                Id: allCartProduct.id,
                newAmount: newAmount - 1,
            });

            if (response.status === 200) {
                alert("Amount updated successfully");
            }
            window.location.reload()
        } catch (error) {
            console.log(error);
        }
        setNewAmount(newAmount - 1);
    };



    const handleDelete = async () => {
        try {
            const response = await axios.delete(`/product/deleteProductInCart/${allCartProduct.id}`);
            if (response.status === 200) {

                alert("Deleted Product In Cart");
            }
            window.location.reload()
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
