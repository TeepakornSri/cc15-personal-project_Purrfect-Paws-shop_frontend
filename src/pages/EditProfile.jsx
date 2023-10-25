import LoginContent from '../features/auth/LoginContent'
import EditProfileForm from '../features/auth/EditProfileForm'
import { useEffect, useState } from 'react'
import axios from '../config/axios';

export default function EditProfile() {

    const [myInfo, setMyInfo] = useState('')


    useEffect(() => {

        axios
            .get('/auth/me')
            .then(res => {
                setMyInfo(res.data.user);
            })
            .catch(err => {
                console.log(err);
            });
    }, []); // 


    return (

        <div className="flex justify-center items-center gap-4 mt-8 min-h-screen">
            <div className="flex min-w-[1400px] h-[800px] items-center justify-between">
                <div className='border w-[600px] flex justify-center flex-col h-[400px] items-center gap-10 shadow-2xl rounded-3xl'>
                    <div className='flex gap-4 text-3xl'>
                        <h1 className='text-orange-500 font-semibold'>FirstName </h1>
                        <h1> : {myInfo.firstName}</h1>
                    </div>
                    <div className='flex gap-4 text-3xl'>
                        <h1 className='text-orange-500 font-semibold'>LastName </h1>
                        <h1> : {myInfo.lastName}</h1>
                    </div>
                    <div className='flex gap-4 text-3xl'>
                        <h1 className='text-orange-500 font-semibold'>PhoneNumber</h1>
                        <h1> : {myInfo.phoneNumber}</h1>
                    </div>
                    <div className='flex gap-4 text-3xl'>
                        <h1 className='text-orange-500 font-semibold'>Address</h1>
                        <h1> : {myInfo.address}</h1>
                    </div>
                </div>
                <div className="flex-col h-[600px] min-w-[600px] px-6 pt-8 bg-white rounded-2xl shadow-[0_0_15px_rgb(0_0_0_/0.2)] mb-6 border">
                    <h1 className="text-center font-bold text-4xl mb-9">Edit Profile</h1>
                    <EditProfileForm />
                </div>
            </div>
        </div>
    )
}
