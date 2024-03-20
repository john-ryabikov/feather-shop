import { useDispatch } from "react-redux";
import { setOrdersDelete, addOrder, removeOrder } from "../../redux/slices/cartSlice";

export default function Order ({order}){

    const dispatch = useDispatch()

    const plusOrder = (id) => {
        dispatch(addOrder({id}))
    }
    const minusOrder = (id) => {
        dispatch(removeOrder({id}))
    }
    
    const deleteOrder = (id) => {
        dispatch(setOrdersDelete({id}))
    }

    return (
        <div className="cart__order" key={order.id}>
            <img className="cart__order-img" src={order.img} alt="Order-Image" />
            <div className="cart__order-info">
                <p className="cart__order-title">{order.name}</p>
                <div className="cart__count">
                    <p className="cart__count-text">Количество:</p>
                    <p className="cart__counter">
                        <button className="cart__counter-minus" onClick={() => minusOrder(order.id)}>-</button>
                        <span className="cart__counter-count">{order.count}</span>
                        <button className="cart__counter-plus" onClick={() => plusOrder(order.id)}>+</button>
                    </p>
                </div>
            </div>
            <button className="cart__delete-order" onClick={() => {deleteOrder(order.id)}}>
                <img className="cart__delete-icon" src="img/Icons/delete_icon.svg" alt="Delete" />
            </button>
        </div>
    )
}