import AdminOrderCards from "./AdminOrderCards";


export default function AdminAllProduct({ allOrder }) {
    return (
        <div className="overflow-x-auto w-full h-[400px] shadow-md rounded-lg p-2">
            <table className="p-20 border w-full">
                <tr className="border p-4">
                    <th>ID</th>
                    <th>CreateAt</th>
                    <th>UpdateAt</th>
                    <th>Paymentsubmission</th>
                    <th>Orderstatus</th>
                    <th>userId</th>
                </tr>
                {allOrder.map((el) => (
                    <AdminOrderCards key={el.id} allOrder={el} />
                ))}
            </table>
        </div>
    );
}