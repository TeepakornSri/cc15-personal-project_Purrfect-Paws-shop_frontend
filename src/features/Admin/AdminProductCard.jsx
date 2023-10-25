import axios from '../../config/axios';
import Joi from 'joi';
import { useRef, useState } from 'react';

const updateSchema = Joi.object({
    productName: Joi.string().trim().required(),
    productImg: Joi.required(),
    productdescription: Joi.string(),
    price: Joi.number().precision(2).required(),
    categoryId: Joi.number().required(),
});

export default function AdminProductCard({ allProduct }) {
    const [file, setFile] = useState(null)
    const inputEl = useRef(null)
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState({
        productName: '',
        productImg: '',
        productdescription: '',
        price: '',
        categoryId: '',
    });

    const validateEditProduct = input => {
        const { error } = updateSchema.validate(input, { abortEarly: false });
        if (error) {
            const result = error.details.reduce((acc, el) => {
                const { message, path } = el;
                acc[path[0]] = message;
                return acc;
            }, {});
            return result;
        }
    };


    const [error, setError] = useState({});

    const handleChangeInput = e => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const handleSubmitEditProduct = async (e) => {
        try {
            e.preventDefault();
            const validationError = validateEditProduct(input);
            const formData = new FormData()
            formData.append("productName", input.productName)
            formData.append("productImg", input.productImg)
            formData.append("price", input.price)
            formData.append("productdescription", input.productdescription)
            formData.append("categoryId", input.categoryId)
            if (validationError) {
                return setError(validationError);
            }
            setError({});
            const response = await axios.patch(`/product/updateproduct/${allProduct.id}`, formData);
            if (response.status === 201) {
                alert('Product Updated');
                window.location.reload();
            }
        } catch (err) {
            console.log(err);
        }
    };


    const handleDelete = async () => {
        try {
            const response = await axios.delete(`/product/delete/${allProduct.id}`);
            if (response.status === 200) {

                alert("Deleted Product!!");
            }
            window.location.reload()
        } catch (err) {
            console.log(err);
        }
    }



    return (
        <tr className="border p-4 text-center text-base">
            <td>{allProduct.id}</td>
            <td>{allProduct.productName}</td>
            <td>{allProduct.price}</td>
            <td>{allProduct.categoryId}</td>
            <td className="w-12 h-12">
                <img src={allProduct.productImg} alt="Product" />
            </td>
            <td>{allProduct.productdescription}</td>
            <td>
                <button className="w-14 rounded-xl text-center text-base bg-green-500 hover:bg-green-200 text-white" onClick={() => setIsOpen(true)}>
                    Edit
                </button>
                {isOpen && (
                    <form onSubmit={handleSubmitEditProduct}>
                        <div className="h-[430px] w-[800px] absolute right-12 top-5 rounded-xl shadow-xl flex flex-col gap-2 border">
                            <div className="p-4">
                                <h1>Edit Product</h1>
                                <button className="absolute top-0 right-4 text-2xl" onClick={() => setIsOpen(false)}>x</button>
                            </div>
                            <div className="flex flex-col gap-4 justify-start items-start p-2">
                                <input
                                    type="text"
                                    placeholder="productName"
                                    value={input.productName}
                                    onChange={handleChangeInput}
                                    name="productName"
                                    className={`block w-full border rounded-md px-3 py-1.5 text-sm outline-none focus:ring
                                    ${error.productName ? "border-red-500 focus:ring-red-300" : "focus:ring-blue-300 focus:border-blue-500 border-gray-300"}
                                `}
                                />

                                <input type='file'
                                    placeholder='productImg'
                                    ref={inputEl}
                                    onChange={e => {
                                        if (e.target.files[0]) {
                                            setFile(e.target.files[0])
                                            setInput({ ...input, productImg: e.target.files[0] })
                                        }
                                    }}
                                    name='productImg'
                                    className={`block w-full border rounded-md px-3 py-1.5 text-sm outline-none focus:ring ${error.productImg
                                        ? "border-red-500 focus:ring-red-300"
                                        : "focus:ring-blue-300  focus:border-blue-500 border-gray-300"
                                        } `} />

                                <input
                                    type="text"
                                    placeholder="price"
                                    value={input.price}
                                    onChange={handleChangeInput}
                                    name="price"
                                    className={`block w-full border rounded-md px-3 py-1.5 text-sm outline-none focus:ring
                                    ${error.price ? "border-red-500 focus:ring-red-300" : "focus:ring-blue-300 focus:border-blue-500 border-gray-300"}
                                `}
                                />

                                <input
                                    type="text"
                                    placeholder="productdescription"
                                    value={input.productdescription}
                                    onChange={handleChangeInput}
                                    name="productdescription"
                                    className={`block w-full border rounded-md px-3 py-1.5 text-sm outline-none focus:ring
                                    ${error.productdescription ? "border-red-500 focus:ring-red-300" : "focus:ring-blue-300 focus:border-blue-500 border-gray-300"}
                                `}
                                />

                                <input
                                    type="text"
                                    placeholder="categoryId"
                                    value={input.categoryId}
                                    onChange={handleChangeInput}
                                    name="categoryId"
                                    className={`block w-full border rounded-md px-3 py-1.5 text-sm outline-none focus:ring
                                    ${error.categoryId ? "border-red-500 focus:ring-red-300" : "focus:ring-blue-300 focus:border-blue-500 border-gray-300"}
                                `}
                                />
                            </div>
                            <div className="mx-auto col-span-full">
                                <button className="bg-orange-500 rounded-lg text-white px-3 py-1.5 text-lg font-bold min-w-[10rem] hover:bg-orange-300">
                                    Edit Product
                                </button>
                            </div>
                        </div>
                    </form>
                )}
            </td>
            <td>
                <button className="w-14 rounded-xl text-center text-base bg-red-500 hover:bg-red-300 text-white" onClick={handleDelete}>
                    Delete
                </button>
            </td>
        </tr>
    );
}
