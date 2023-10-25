
export default function OrderCard({ myOrder }) {
    return (
        <div>
            <div>
                <div className="border w-80 shadow-2xl h-20 flex justify-center items-center p-4 gap-4 rounded-xl">
                    <div className="flex flex-col justify-center items-center">
                        <h1>OrderID</h1>
                        <h1>{myOrder.id}</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <h1>CreateAt</h1>
                        <h1>{myOrder.createAt.slice(0, 10)}</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <h1>OrderStatus</h1>
                        <h1>{myOrder.orderstatus}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
