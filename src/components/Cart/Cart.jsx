import { useSelector, useDispatch } from "react-redux";
import { setShowCart, setOrdersClear } from "../../redux/slices/cartSlice";
import { toggleAlertSend } from "../../redux/slices/alertSlice";
import { toggleShowLay } from "../../redux/slices/layoutSlice";

import Orders from "./Orders"
import CardBottom from "./CartBottom"

export default function Cart (){

    const dispatch = useDispatch()
    const {showCart, orders} = useSelector((state) => state.cartShow)

    const closeCart = () => {
        dispatch(setShowCart())
        dispatch(toggleShowLay())
    }
    const clearCart = () => {
        dispatch(setOrdersClear())
    }

    return (
        <div className={`cart ${showCart && 'cart-active'}`}>
            <button className="cart__close-btn" onClick={closeCart}>
                <img className="cart__close-btn-icon" src="img/Icons/close_icon.svg" alt="Назад" />
            </button>
            <button className={`cart__btn-clear ${orders.length === 0 && 'cart__btn-clear_disable'}`} onClick={clearCart}>
                <img className="cart__btn-clear-icon" src="img/Cart/clear_icon.svg" alt="Х" />
                <span>Очистить корзину</span>
            </button>
            <Orders/>
            <CardBottom/>
        </div>
    )
}