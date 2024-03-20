import Wrapper from "../UI/Wrapper"

import { useSelector, useDispatch } from "react-redux";
import { setShowCart } from "../../redux/slices/cartSlice";
import { toggleOpen } from "../../redux/slices/menuSlice";
import { toggleShowLay } from "../../redux/slices/layoutSlice";

import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function Header(){

    const dispatch = useDispatch()
    const {orders} = useSelector((state) => state.cartShow)
    const openCart = () => {
        dispatch(toggleShowLay())
        dispatch(setShowCart())
    }
    const menuShow = () => {
        dispatch(toggleShowLay())
        dispatch(toggleOpen())
    }

    return (
        <header className="header">
            <Wrapper>
                <div className="header__cont">
                    <button className="header__menu-btn" onClick={menuShow}>
                        <img className="header__menu-btn-icon" src="img/Header/menu_icon.svg" alt="Меню" />
                    </button>
                    <nav className="header__nav-first">
                        <AnchorLink className="header__nav-link" href="#products">Товары</AnchorLink>
                        <AnchorLink className="header__nav-link" href="#why">Почему мы?</AnchorLink>
                        <AnchorLink className="header__nav-link" href="#contacts">Контакты</AnchorLink>
                    </nav>
                    <a className="header__logo" href="/">
                        <img className="header__logo-icon" src="img/Header/logo.svg" alt="Logo" />
                    </a>
                    <button className="header__cart-btn" onClick={openCart}>
                        {orders.length > 0 && (<span className="header__cart-btn-count">{orders.length}</span>)}
                        <img className="header__cart-icon" src="img/Header/cart_icon.svg" alt="Cart" />
                    </button>
                </div>
            </Wrapper>
        </header>
    )
}