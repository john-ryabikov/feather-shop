import React, { useState, useEffect } from "react"

import { useSelector, useDispatch } from "react-redux";
import { setShowCart } from "../../redux/slices/cartSlice";
import { toggleShowLay } from "../../redux/slices/layoutSlice";

export default function ButtonCart () {

    const [scroll, setScroll] = useState(false)
    const dispatch = useDispatch()
    const {orders} = useSelector((state) => state.cartShow)
    const openCart = () => {
        dispatch(toggleShowLay())
        dispatch(setShowCart());
    }

    useEffect(() => {
        window.addEventListener('scroll', function () {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 100) {
                setScroll(true)
            } else {
                setScroll(false)
            }
          });
    }, []) 

    return (
        <button className={!scroll ? "button-cart" : "button-cart button-cart_show"} onClick={openCart}>
            <img className="button-cart__icon" src="img/Header/cart_icon.svg" alt="Cart" />
            {orders.length > 0 && (<span className="button-cart__count">{orders.length}</span>)}
        </button>
    )
}