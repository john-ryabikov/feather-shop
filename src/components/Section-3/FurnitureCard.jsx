import { useSelector, useDispatch } from "react-redux";
import { setOrders } from "../../redux/slices/cartSlice";
import { toggleAlertAdd } from "../../redux/slices/alertSlice";

export default function FurnitureCard ({furniture}){

    const dispatch = useDispatch()
    const {orders} = useSelector((state) => state.cartShow)
    const addAlert = () => {
        dispatch(toggleAlertAdd())
        setTimeout(() => {
            dispatch(toggleAlertAdd())
        }, 1500)
    }
    const addOrder = (order) => {
        dispatch(setOrders({order}))
        addAlert()
    }

    return (
        <div className="block-3__furniture-card">
            <div className="block-3__furniture-img-box">
                <img className="block-3__furniture-img" src={furniture.img} alt="Furniture" />
            </div>      
            <p className="block-3__furniture-name">{furniture.name}</p>
            <p className="block-3__furniture-price-h">Цена:</p>
            <p className="block-3__furniture-price">
                <span className="block-3__furniture-price-rub">₽</span>
                {furniture.price}
            </p>
            <p className={orders.find(obj => obj.id == furniture.id) ?  "block-3__btn-cart block-3__btn-cart_done" : "block-3__btn-cart block-3__btn-cart_add"} onClick={() => addOrder(furniture)}>
                {orders.find(obj => obj.id == furniture.id) ? (<span>В корзине</span>) : (<span>+ Добавить в корзину</span>)}
            </p>
        </div>
    )
}