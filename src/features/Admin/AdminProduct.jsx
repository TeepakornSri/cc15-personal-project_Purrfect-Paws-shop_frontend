import AdminShowProduct from "./AdminShowProduct";
import CreateProduct from "./CreateProduct";

export default function AdminProduct() {
    return (
        <div className="flex flex-col justify-start text-xl font-semibold gap-20 w-full">
            <div className="p-6 w-[800px] border shadow-lg ml-4 mt-6 rounded-lg">
                <div>
                    <CreateProduct />
                </div>
            </div>
            <div><AdminShowProduct /></div>
        </div>
    )
}
