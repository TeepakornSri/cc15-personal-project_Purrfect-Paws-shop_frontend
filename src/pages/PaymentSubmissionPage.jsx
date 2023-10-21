import { useRef, useState } from 'react'
import qrpayment from '../assets/QRPayment.jpg'
import Loading from '../components/Loading'
import { useAuth } from '../hooks/use-auth'

export default function PaymentSubmission() {
    const [file, setFile] = useState(null)
    const [loading, setLoading] = useState(false)
    const { uploadPayment } = useAuth()
    const inputEl = useRef(null)




    const uploadPaymentImage = async input => {
        try {
            const formData = new FormData()
            formData.append('paymentsubmission', input)
            setLoading(true)
            await uploadPayment(formData)


        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
        }

    }



    return (
        <div className='h-screen'>
            {loading && <Loading />}
            <div className='flex justify-center items-center'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='w-80 mt-6'>
                        <img src={qrpayment} alt='QRPayment' />
                    </div>
                    <div>
                        <h1 className='mt-5'>
                            <input type='file' ref={inputEl} onChange={e => {
                                if (e.target.files[0]) {
                                    setFile(e.target.files[0])
                                }
                            }} />
                            <button onClick={() => uploadPaymentImage(file)} className='border p-2 rounded-xl shadow-lg w-24 bg-orange-500 font-semibold hover:bg-orange-300'>Save</button>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}