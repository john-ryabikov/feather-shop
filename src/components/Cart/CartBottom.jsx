import { useSelector, useDispatch } from "react-redux";
import { setShowCart, setOrdersClear } from "../../redux/slices/cartSlice";
import { toggleAlertSend } from "../../redux/slices/alertSlice";
import { toggleShowLay } from "../../redux/slices/layoutSlice";

export default function CartBottom() {

    const dispatch = useDispatch()
    const {orders, totalPrice} = useSelector((state) => state.cartShow)

    const closeCart = () => {
        dispatch(setShowCart())
        dispatch(toggleShowLay())
    }
    const clearCart = () => {
        dispatch(setOrdersClear())
    }
    const sendAlert = () => {
        dispatch(toggleAlertSend())
        setTimeout(() => {
            dispatch(toggleAlertSend())
        }, 1500)
    }
    const sendCart = () => {
        sendAlert()
        closeCart()
        setTimeout(() => {
            clearCart()
        }, 700)
    }

    return (
        <div className="cart__bottom">
            <div className="cart__all-count">
                <p className="cart__all-count-text">Кол-во товаров:</p>
                <p className="cart__all-count-num">{orders.reduce((sum, order) => (order.count + sum), 0)} шт.</p>
            </div>
            <div className="cart__result">
                <p className="cart__result-text">Общая сумма:</p>
                <p className="cart__result-price">{totalPrice}<span>₽</span></p>
            </div>
            <div className={`cart__btns ${orders.length === 0 && 'cart__btns_disable'}`}>
                <button className="cart__btn-send" onClick={sendCart} >Оформить заказ</button>
            </div>
        </div>
    )
}
