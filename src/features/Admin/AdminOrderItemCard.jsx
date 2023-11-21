export default function AdminOrderItemCard({ allOrderItem }) {
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    return (
        <tr className="border text-center text-base">
            <td>{allOrderItem.id}</td>
            <td>{formatDate(allOrderItem.createAt)}</td>
            <td>{formatDate(allOrderItem.updateAt)}</td>
            <td>{allOrderItem.amount}</td>
            <td>{allOrderItem.price}</td>
            <td>{allOrderItem.orderId}</td>
            <td>{allOrderItem.productId}</td>
        </tr>
    );
}
