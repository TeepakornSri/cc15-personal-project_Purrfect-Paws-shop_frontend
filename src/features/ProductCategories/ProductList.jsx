import ProductCard from "./ProductCard";

export default function ProductList({ allProduct }) {
    return (
        <div className="grid grid-cols-4 w-[1200px] gap-2">
            {allProduct.map(el => <ProductCard key={el.id} productObj={el} />)}
        </div>
    )
}
