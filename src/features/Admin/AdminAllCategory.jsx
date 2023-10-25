import AdminCategoryCard from "./AdminCategoryCard";

export default function AdminAllCategory({ AllCategory }) {
    return (
        <div className="overflow-x-auto">
            <table className="p-20 border w-full">
                <tr className="border p-4">
                    <th>ID</th>
                    <th>Category</th>
                    <th>CreateAt</th>
                    <th>UpdateAt ID</th>
                </tr>
                {AllCategory.map((el) => (
                    <AdminCategoryCard key={el.id} AllCategory={el} />
                ))}
            </table>
        </div>
    );
}
