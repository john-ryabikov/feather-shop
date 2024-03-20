import { useSelector, useDispatch } from "react-redux";
import { toggleOpen } from "../../redux/slices/menuSlice";
import { toggleShowLay } from "../../redux/slices/layoutSlice";

import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function MenuNav() {

    const dispatch = useDispatch()
    const {open} = useSelector((state) => state.menu)
    const menuShow = () => {
        dispatch(toggleShowLay())
        dispatch(toggleOpen())
    }

    return (
        <nav className={`menu-nav ${open && 'menu-nav-active'}`}>
            <button className='menu-nav__close-btn' onClick={menuShow}>
                <img className="menu-nav__close-btn-icon" src="img/Icons/close_icon.svg" alt="Назад" />
            </button>
            <AnchorLink className="menu-nav__link" onClick={menuShow} href="#products">Товары</AnchorLink>
            <AnchorLink className="menu-nav__link" onClick={menuShow} href="#why">Почему мы?</AnchorLink>
            <AnchorLink className="menu-nav__link" onClick={menuShow} href="#contacts">Контакты</AnchorLink>
        </nav>
    )
}
