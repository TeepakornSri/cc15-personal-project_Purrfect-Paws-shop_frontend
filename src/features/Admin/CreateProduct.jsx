
import axios from '../../config/axios';
import Joi from 'joi'
import { useRef, useState } from 'react';


const CreateSchema = Joi.object({
    productName: Joi.string().trim().required(),
    productImg: Joi.required(),
    productdescription: Joi.string(),
    price: Joi.number().precision(2).required(),
    categoryId: Joi.number().required(),
});

const validateCreateProduct = input => {
    const { error } = CreateSchema.validate(input, { abortEarly: false })
    if (error) {
        const result = error.details.reduce((acc, el) => {
            const { message, path } = el
            acc[path[0]] = message
            return acc
        }, {})
        return result
    }
}


export default function CreateProduct() {

    const [file, setFile] = useState(null)
    const inputEl = useRef(null)


    const [input, setInput] = useState({
        productName: '',
        productImg: '',
        productdescription: '',
        price: '',
        categoryId: '',
    })

    const [error, setError] = useState({})

    const handleChangeInput = e => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }



    const handleSubmitCreateProduct = async (e) => {
        try {
            e.preventDefault()
            const validationError = validateCreateProduct(input)
            const formData = new FormData()
            formData.append("productName", input.productName)
            formData.append("productImg", input.productImg)
            formData.append("price", input.price)
            formData.append("productdescription", input.productdescription)
            formData.append("categoryId", input.categoryId)
            if (validationError) {
                console.log(validationError)
                return setError(validationError)
            }
            setError({})
            const response = await axios.post('/product', formData);
            if (response.status === 200) {
                alert('Product Create');
                window.location.reload()
            }
        } catch (err) {
            console.log(err);
        }
    }



    return (
        <form onSubmit={handleSubmitCreateProduct} className='p-6'>
            <h1 className='text-xl text-center font-semibold'>Create Product</h1>

            <div className='flex flex-col gap-4 justify-start items-start p-2'>
                <input type='text'
                    placeholder='productName'
                    value={input.productName}
                    onChange={handleChangeInput}
                    name='productName'
                    className={`block w-full border rounded-md px-3 py-1.5 text-sm outline-none
               focus:ring
               ${error.productName
                            ? "border-red-500 focus:ring-red-300"
                            : "focus:ring-blue-300  focus:border-blue-500 border-gray-300"
                        }
               `} />
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
                    className={`block w-full border rounded-md px-3 py-1.5 text-sm outline-none
               focus:ring
               ${error.productImg
                            ? "border-red-500 focus:ring-red-300"
                            : "focus:ring-blue-300  focus:border-blue-500 border-gray-300"
                        }
               `} />
                <input type='text'
                    placeholder='price'
                    value={input.price}
                    onChange={handleChangeInput}
                    name='price'
                    className={`block w-full border rounded-md px-3 py-1.5 text-sm outline-none
               focus:ring
               ${error.price
                            ? "border-red-500 focus:ring-red-300"
                            : "focus:ring-blue-300  focus:border-blue-500 border-gray-300"
                        }
               `} />
                <input type='text'
                    placeholder='productdescription'
                    value={input.productdescription}
                    onChange={handleChangeInput}
                    name='productdescription'
                    className={`block w-full border rounded-md px-3 py-1.5 text-sm outline-none
               focus:ring
               ${error.productdescription
                            ? "border-red-500 focus:ring-red-300"
                            : "focus:ring-blue-300  focus:border-blue-500 border-gray-300"
                        }
               `} />
                <input type='text'
                    placeholder='categoryId'
                    value={input.categoryId}
                    onChange={handleChangeInput}
                    name='categoryId'
                    className={`block w-full border rounded-md px-3 py-1.5 text-sm outline-none
               focus:ring
               ${error.categoryId
                            ? "border-red-500 focus:ring-red-300"
                            : "focus:ring-blue-300  focus:border-blue-500 border-gray-300"
                        }
               `} />

            </div>
            <div className="mx-auto col-span-full">
                <button className="bg-orange-500 rounded-lg text-white px-3 py-1.5 text-lg font-bold min-w-[10rem] hover:bg-orange-300">
                    Create Product
                </button>
            </div>
        </form>
    )
}
