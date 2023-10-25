import axios from "../../config/axios";


export default function AdminCategoryCard({ AllCategory }) {


    const handleDelete = async () => {
        try {
            const response = await axios.delete(`/product/deletecategory/${AllCategory.id}`);
            if (response.status === 200) {

                alert("Deleted Category!!");
            }
            window.location.reload()
        } catch (err) {
            console.log(err);
        }
    }




    return (
        <tr className="border p-6 text-center text-base overflow-x-auto">
            <td>{AllCategory.id}</td>
            <td>{AllCategory.productCategory}</td>
            <td>{AllCategory.createAt}</td>
            <td>{AllCategory.updateAt}</td>
            <td>
                <button className="w-14 rounded-xl text-center text-base bg-red-500 hover:bg-red-300 text-white" onClick={handleDelete} >
                    Delete
                </button>
            </td>
        </tr>
    );
}
