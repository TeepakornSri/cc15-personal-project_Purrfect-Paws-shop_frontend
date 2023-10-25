import { useEffect, useState } from 'react'
import axios from 'axios'
import ProductList from '../features/ProductCategories/ProductList'

export default function HomePageContent() {

    const [allProduct, setAllProduct] = useState([])

    useEffect(() => {
        axios
            .get('/product/showallproduct')
            .then(res => {
                setAllProduct(res.data.prodcutIds)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])



    return (
        <div className='flex justify-center h-screen '>

            <div className=' max-w-[1200px] grid grid-cols-4 gap-2 p-4 overflow-hidden overflow-y-auto '>
                <ProductList allProduct={allProduct} />

            </div>

        </div>
    )
}
