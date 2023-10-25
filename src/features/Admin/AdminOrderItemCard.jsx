

export default function AdminOrderItemCard({ allOrderItem }) {
    return (
        <tr className="border text-center text-base">
            <td>{allOrderItem.id}</td>
            <td>{allOrderItem.createAt}</td>
            <td>{allOrderItem.updateAt}</td>
            <td>{allOrderItem.amount}</td>
            <td>{allOrderItem.price}</td>
            <td>{allOrderItem.orderId}</td>
            <td>{allOrderItem.productId}</td>
        </tr>
    )
}
