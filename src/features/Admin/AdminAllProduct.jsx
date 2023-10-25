import AdminProductCard from "./AdminProductCard";

export default function AdminAllProduct({ allProduct }) {
    return (
        <div className="overflow-scroll w-full h-[400px]">
            <table className="p-20 border w-full">
                <tr className="border p-4">
                    <th>ID</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Category ID</th>
                    <th>Product Image</th>
                    <th>Product Description</th>
                </tr>
                {allProduct.map((el) => (
                    <AdminProductCard key={el.id} allProduct={el} />
                ))}
            </table>
        </div>
    );
}
