import { Link } from 'react-router-dom';
import ProfileImage from '../assets/blank.png';
import { BsArrowBarRight, BsArrowBarLeft } from 'react-icons/bs';
import { useState, useEffect, useRef } from 'react';
import { useAuth } from '../hooks/use-auth';



export default function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const { logout, authUser } = useAuth();

    const handleLogout = () => {
        setIsOpen(false);
        logout();

        if (authUser === null) {
            alert('Please Login');
        } else {
            alert('Successfully Logged out');
        }
    };

    useEffect(() => {

        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);


        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                <img src={ProfileImage} alt="ProfileImage" className="rounded-full h-10 w-10" />
            </div>
            {isOpen && (
                <div className="h-32 w-64 bg-slate-100 absolute translate-y-2 rounded-xl shadow-xl flex flex-col gap-2">
                    {authUser === null ? (
                        <Link to="/login" onClick={() => setIsOpen(false)}>
                            <div className="flex gap-4 p-2 items-center cursor-pointer hover:bg-gray-300 rounded-3xl mt-2">
                                <div className="bg-gray-100 text-black text-base h-9 aspect-square rounded-full flex items-center justify-center">
                                    <BsArrowBarRight />
                                </div>
                                <div className="font-semibold text-base text-black">Login</div>
                            </div>
                        </Link>
                    ) : <div className='text-black text-lg font-medium flex mt-4 p-2 rounded-3xl hover:bg-gray-300 cursor-pointer'>
                        <Link to='EditProfile'>
                            <div className='pl-4'>
                                Hello, {authUser.firstName} {authUser.lastName}
                            </div>
                        </Link>
                    </div>
                    }
                    <div className="flex gap-4 p-2 items-center cursor-pointer hover:bg-gray-300 rounded-3xl" onClick={handleLogout}>
                        <div className="bg-gray-100 text-black text-base h-9 aspect-square rounded-full flex items-center justify-center">
                            <BsArrowBarLeft />
                        </div>
                        <div className="font-semibold text-base text-black">Log Out</div>
                    </div>
                </div>
            )}
        </div>
    );
}
