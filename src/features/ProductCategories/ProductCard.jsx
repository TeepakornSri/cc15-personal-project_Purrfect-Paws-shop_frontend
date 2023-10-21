
import axios from '../../config/axios';
import { Link } from 'react-router-dom'
export default function ProductCard({ productObj }) {


    const handleAddToCart = async () => {
        try {
            const amount = 1;

            await axios.post(`/product/addToCart/${productObj.id}`, { amount });
            window.location.reload()

        } catch (error) {
            console.error(error);
        }
    };


    return (
        <div className='flex flex-col w-56 rounded-2xl shadow-lg max-h-[420px] border transform transition-transform hover:scale-105'>
            <div className="flex justify-center">
                <Link to={`/product/${productObj.id}`}>
                    <div className='w-44 p-1 h-40 mb-4 flex cursor-pointer justify-center '>
                        <img src={productObj.productImg} alt="Product" />
                    </div>
                </Link>
            </div>
            <div>
                <div className='flex justify-between p-1'>
                    <h4>{productObj.productName}</h4>
                    <h4>{productObj.price}</h4>
                </div>
                <div className='overflow-hidden max-w-xl max-h-20 p-2 cursor-pointer'>
                    <p>{productObj.productdescription}</p>
                </div>
                <div className='items-center justify-center flex mt-1 p-2'>
                    <div className='border w-20 rounded-full flex justify-center hover:bg-orange-500'>
                        <Link to='/cart'>
                            <button onClick={handleAddToCart}>Buy now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
