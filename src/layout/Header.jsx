import Menu from "./Menu";
import img from '../assets/FullLogo_Transparent_NoBuffer.PNG'
import { Link } from 'react-router-dom'


export default function Header() {
    return (
        <header className="bg-orange-500 flex shadow-xl sticky top-0 items-center justify-evenly z-50">
            <div className="flex justify-center items-center gap-10 flex-shrink-0">
                <div className="py-2 justify-self-start w-[100px] cursor-pointer">
                    <Link to='/'>
                        <img src={img} alt="shop-logo" />
                    </Link>
                </div>
                <h1 className="text-4xl font-semibold text-white">PURRFECT PAWS SHOP</h1>
            </div>
            <div>

                <input type="text" placeholder="Search for..." className="w-[400px] outline-none p-2 rounded-2xl  border focus:ring-2 focus:border-blue-500 cursor-text" />
            </div>
            <div>
                <Menu />
            </div>
        </header>
    )
}