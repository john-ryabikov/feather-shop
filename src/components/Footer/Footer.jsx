import Wrapper from "../UI/Wrapper"

import FooterNavs from "./FooterNavs"
import FooterSoc from "./FooterSoc"

export default function Footer (){
    return (
        <footer id="contacts" className="footer">
            <Wrapper>
                <div className="footer__cont">
                    <FooterNavs/>
                    <FooterSoc/>
                </div>
                <div className="footer__rights">
                    <p className="footer__copyright">©️ Все права защищены. 2024</p>
                    <p className="footer__author">
                        <span className="footer__author-sub">Разработка: </span>
                        <a className="footer__author-link" href="https://just-site.ru">Just-site.ru</a>
                    </p>
                </div>
            </Wrapper>
        </footer>
    )
}