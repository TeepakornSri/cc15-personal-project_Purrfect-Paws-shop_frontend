import axios from "../../config/axios"
import { useEffect, useState } from "react"
import AdminUserCard from "./AdminUserCard"

export default function AdminUser() {
    const [Alluser, setAllUser] = useState([])
    useEffect(() => {

        axios.get('/auth/getallusers')
            .then(res => {
                setAllUser(res.data.users)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])



    return (
        <div className="overflow-x-auto w-full h-[400px] shadow-md rounded-lg min-h-screen p-4 ">
            <table className="p-20 border w-full">
                <tr className="border p-4">
                    <th>ID</th>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Email</th>
                    <th>PhoneNumber</th>
                    <th>Address</th>
                </tr>
                {Alluser.map((el) => (
                    <AdminUserCard key={el.id} Alluser={el} />
                ))}
            </table>
        </div>
    );
}
