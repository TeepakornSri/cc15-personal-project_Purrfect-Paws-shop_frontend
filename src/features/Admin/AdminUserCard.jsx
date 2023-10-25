

export default function AdminUserCard({ Alluser }) {
    return (
        <tr className="border text-center text-base">
            <td>{Alluser.id}</td>
            <td>{Alluser.firstName}</td>
            <td>{Alluser.lastName}</td>
            <td>{Alluser.email}</td>
            <td>{Alluser.phoneNumber}</td>
            <td>{Alluser.address}</td>
        </tr>
    )
}
