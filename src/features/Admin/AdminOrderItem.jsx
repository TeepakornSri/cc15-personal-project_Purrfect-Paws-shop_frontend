import AdminOrderItemCard from "./AdminOrderItemCard";


export default function AdminAllProduct({ allOrderItem }) {
    return (
        <div className="overflow-x-auto w-full h-[400px] shadow-md rounded-lg p-2">
            <table className="p-20 border w-full">
                <tr className="border p-4">
                    <th>ID</th>
                    <th>CreateAt</th>
                    <th>UpdateAt</th>
                    <th>Amount</th>
                    <th>Price</th>
                    <th>OrderId</th>
                    <th>ProductId</th>
                </tr>
                {allOrderItem.map((el) => (
                    <AdminOrderItemCard key={el.id} allOrderItem={el} />
                ))}
            </table>
        </div>
    );
}