import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../config/axios";
import Swal from 'sweetalert2'
import Loading from "../components/Loading";

export default function ProductPage() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [amount, setAmount] = useState(1)

    useEffect(() => {

        axios
            .get(`/product/${productId}`)
            .then(res => {
                setProduct(res.data.product);
            })
            .catch(err => {
                console.log(err);
            });
    }, [productId]); // 


    if (!product) {
        return <Loading />;
    }


    const increaseAmount = () => {
        setAmount(amount + 1);
    };

    const decreaseAmount = () => {
        if (amount > 1) {
            setAmount(amount - 1);
        }
    };

    const handleAddToCart = async () => {
        try {

            const response = await axios.post(`/product/addToCart/${product.id}`, { amount });

            if (response.status === 200) {

                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Product Add To Cart",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleBuyNow = async () => {
        try {

            await axios.post(`/product/addToCart/${product.id}`, { amount });
            window.location.reload()

        } catch (error) {
            console.error(error);
        }
    };


    return (

        <div className="flex justify-evenly">
            <div className="w-96 p-4">
                <img src={product.productImg} alt={product.productName} />
            </div>
            <div className="flex flex-col justify-center items-center w-80 gap-4">
                <div className="text-2xl font-bold">
                    <h1>{product.productName}</h1>
                </div>
                <div className="text-xl flex flex-col justify-center items-center">
                    <div>Price</div>
                    <div>${product.price}</div>
                </div>
                <div className="text-xl  text-center">
                    <h1>{product.productdescription}</h1>
                </div>
                <div className="flex flex-col items-center gap-4">
                    <div>
                        <h1>Quantity</h1>
                    </div>
                    <div className="flex gap-4">
                        <button className="w-10 rounded-xl text-center font-bold bg-orange-400 hover:bg-orange-200" onClick={decreaseAmount}>-</button>
                        <h1>{amount}</h1>
                        <button className="w-10 rounded-xl text-center font-bold bg-orange-400 hover:bg-orange-200" onClick={increaseAmount}>+</button>
                    </div>
                </div>
                <div className="flex gap-6">
                    <button className="w-32 p-2 rounded-full flex justify-center bg-orange-400 hover:bg-orange-200" onClick={handleAddToCart} >Add To Cart</button>
                    <Link to='/cart'>
                        <button className="w-32 p-2 rounded-full flex justify-center bg-orange-400 hover:bg-orange-200" onClick={handleBuyNow}>Buy Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
