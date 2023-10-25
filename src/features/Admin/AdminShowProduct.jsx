import axios from "../../config/axios"
import { useEffect, useState } from "react"
import AdminAllProduct from "./AdminAllProduct"

export default function AdminShowProduct() {

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
        <div>
            <div>
                <AdminAllProduct allProduct={allProduct} />
            </div>
        </div>
    )
}
