
import CatFoodImg from '../assets/Catfood.png'
import CatFoodImg2 from '../assets/Catfood2.png'
import ProductImg from '../assets/Productimg.png'

export default function HomePageContent() {
    return (

        <div className='mt-10 mb-80'>
            <div className='items-center flex justify-center mb-6 text-3xl font-semibold'>
                <h1 className='text-orange-500'>Product Categories</h1>
            </div>
            <div className='flex justify-evenly'>
                <div className='flex flex-col items-center'>
                    <img src={CatFoodImg} className='h-32 w-32 rounded-full border-black border hover:border-blue-600 cursor-pointer transform transition-transform hover:scale-105' />
                    <h4>อาหาร</h4>
                </div>
                <div className='flex flex-col items-center'>
                    <img src={CatFoodImg2} className='h-32 w-32 rounded-full border-black border hover:border-blue-600 cursor-pointer transform transition-transform hover:scale-105' />
                    <h4>ขนม</h4>
                </div>
                <div className='flex flex-col items-center'>
                    <img src={ProductImg} className='h-32 w-32 rounded-full border-black border hover:border-blue-600 cursor-pointer transform transition-transform hover:scale-105' />
                    <h4>อื่นๆ</h4>
                </div>
            </div>
        </div>

    )
}
