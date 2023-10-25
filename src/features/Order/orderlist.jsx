import OrderCard from "./OrderCard";

export default function Orderlist({ myOrder }) {
    return (
        <div className='flex flex-col gap-4 justify-center items-center'>
            {myOrder.map(el => <OrderCard key={el.id} myOrder={el} />)}
        </div>
    )
}

