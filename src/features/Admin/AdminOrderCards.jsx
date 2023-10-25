import axios from "../../config/axios"

export default function AdminOrderCards({ allOrder }) {

    const handleupdateOrder = async () => {
        try {
            const response = await axios.patch(`/product/updateorder/${allOrder.id}`);
            if (response.status === 200) {
                alert('Approved Order!!');
                window.location.reload();
            }
        } catch (err) {
            console.log(err)
        }
    }
    const handleCancelOrder = async () => {
        try {
            const response = await axios.delete(`/product/cancelorder/${allOrder.id}`);
            if (response.status === 200) {
                alert('Cancel Order!!');
                window.location.reload();
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <tr className="border text-center text-base">
            <td>{allOrder.id}</td>
            <td>{allOrder.createAt}</td>
            <td>{allOrder.updateAt}</td>
            <td>{allOrder.paymentsubmission}</td>
            <td>{allOrder.orderstatus}</td>
            <td>{allOrder.userId}</td>
            <td className="p-2 flex gap-3">
                <button className="bg-green-700 text-sm text-white rounded-2xl p-1 text-center hover:bg-green-500" onClick={handleupdateOrder}>Approve</button>
                <button className="bg-red-700 text-sm text-white rounded-2xl p-1 text-center hover:bg-red-500" onClick={handleCancelOrder}>Cancel</button>
            </td>
        </tr>
    )
}
