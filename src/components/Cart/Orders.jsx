import Order from "./Order"

import { useSelector } from "react-redux";

export default function Orders (){

    const {orders} = useSelector((state) => state.cartShow)

    return (
        <div className="cart__orders">
        {orders.length === 0 ? (<span className="cart__empty-text">Корзина пуста.</span>) : (
                orders.map((order) => (
                    <Order key={order.id} order={order}/>
                ))
            )}
        </div>
    )
}