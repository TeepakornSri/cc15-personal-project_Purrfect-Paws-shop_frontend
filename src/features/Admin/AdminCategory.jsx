import { useEffect, useState } from "react";
import axios from "../../config/axios";
import AdminAllCategory from "./AdminAllCategory";
import Joi from 'joi';

const CategorySchema = Joi.object({
    productCategory: Joi.string().trim().required(),
});

const validateCategory = input => {
    const { error } = CategorySchema.validate(input, { abortEarly: false });
    if (error) {
        const result = error.details.reduce((acc, el) => {
            const { message, path } = el;
            acc[path[0]] = message;
            return acc;
        }, {});
        return result;
    }
}

export default function AdminCategory() {
    const [AllCategory, setAllCategory] = useState([]);
    const [input, setInput] = useState({
        productCategory: ''
    });

    const [error, setError] = useState({});

    const handleChangeInput = e => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    const handleSubmitCreateCategory = async (e) => {
        try {
            e.preventDefault();
            const validationError = validateCategory(input);
            if (validationError) {
                return setError(validationError);
            }
            setError({});
            const response = await axios.post('/product/createcategory', input);
            if (response.status === 200) {
                alert('Category Created');
                window.location.reload();
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        axios
            .get('/product/allcategory')
            .then(res => {
                setAllCategory(res.data.categories);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);



    return (
        <div className="w-full flex flex-col">
            <form onSubmit={handleSubmitCreateCategory}>
                <div className="flex flex-col p-8">
                    <h1 className="text-xl font-bold">Create Category</h1>
                    <div className="flex gap-4 items-center p-2">
                        <input
                            placeholder="Enter Name"
                            type="text"
                            className="border shadow-md rounded-lg p-2"
                            onChange={handleChangeInput}
                            value={input.productCategory}
                            name="productCategory"
                        />
                        <button className="bg-orange-500 hover:bg-orange-300 rounded-xl p-2 text-white font-medium">Submit</button>
                    </div>
                </div>
            </form>
            <div>
                <AdminAllCategory AllCategory={AllCategory} />
            </div>
        </div>
    );
}
