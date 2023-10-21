import { BsCartFill } from 'react-icons/bs'
import Dropdown from './Dropdown'
import { Link } from 'react-router-dom'

export default function MenuItem() {
    return (
        <div className='flex gap-7 text-4xl text-white justify-self-end self-center mr-10 '>
            <Dropdown />
            <Link to='cart'>
                <div className='hover:text-orange-300 cursor-pointer'><BsCartFill /></div>
            </Link>
        </div>
    )
}

