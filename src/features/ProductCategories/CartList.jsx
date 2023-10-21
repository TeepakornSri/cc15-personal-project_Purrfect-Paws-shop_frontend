import CartCard from '../ProductCategories/CartCard'

export default function ProductList({ allCartProduct }) {
    return (
        <div className='flex flex-col gap-4'>
            {allCartProduct.map(el => <CartCard key={el.id} allCartProduct={el} />)}
        </div>
    )
}