import { useState } from "react";
import { toast } from 'react-toastify'
import Joi from 'joi'
import InputErrorMessage from "./InputErrorMessage";
import { useAuth } from "../../hooks/use-auth"
import EditInput from "./EditInput";


const EditSchema = Joi.object({
    firstName: Joi.string().trim(),
    lastName: Joi.string().trim(),
    phoneNumber: Joi.string()
        .pattern(/^[0-9]{10}$/)
    ,
    address: Joi.string().trim(),
});

const validateEdit = input => {
    const { error } = EditSchema.validate(input, { abortEarly: false })
    if (error) {
        const result = error.details.reduce((acc, el) => {
            const { message, path } = el
            acc[path[0]] = message
            return acc
        }, {})
        return result
    }
}



export default function Updateprofile() {
    const [input, setInput] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        address: '',
    })
    const [error, setError] = useState({})

    const { updateprofile } = useAuth()

    const handleChangeInput = e => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    const handleSubmitForm = e => {
        e.preventDefault()
        const validationError = validateEdit(input)
        if (validationError) {
            return setError(validationError)
        }
        setError({})
        updateprofile(input).catch(err => {
            toast.error(err.response.data.message)
        })
        window.location.reload()
        alert('Profile Updated!')
    }
    return (
        <form className="grid grid-cols-2 gap-x-3 gap-y-4" onSubmit={handleSubmitForm}>
            <div>
                <EditInput placeholder=" First name"
                    value={input.firstName}
                    onChange={handleChangeInput}
                    name="firstName"
                    hasError={error.firstName}
                />
                {error.firstName && <InputErrorMessage message={error.firstName} />}
            </div>
            <div>
                <EditInput placeholder=" Last name"
                    value={input.lastName}
                    onChange={handleChangeInput}
                    name="lastName"
                    hasError={error.lastName}

                />

                {error.lastName && <InputErrorMessage message={error.lastName} />}
            </div>

            <div className="col-span-full">
                <EditInput placeholder="Phone Number"
                    value={input.phoneNumber}
                    onChange={handleChangeInput}
                    name="phoneNumber"
                    hasError={error.phoneNumber}
                />
                {error.phoneNumber && <InputErrorMessage message={error.phoneNumber} />}
            </div>

            <div className="col-span-full">
                <EditInput placeholder="address"
                    value={input.address}
                    onChange={handleChangeInput}
                    name="address"
                    hasError={error.address}
                />
                {error.address && <InputErrorMessage message={error.address} />}
            </div>

            <div className="mx-auto col-span-full">
                <button className="bg-green-500 rounded-lg text-white px-3 py-1.5 text-lg font-bold min-w-[10rem]">
                    Submit
                </button>
            </div>
        </form>
    )
}