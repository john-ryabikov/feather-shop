import { footer_navs } from "../../data/data"

import FooterNav from "./FooterNav"

export default function FooterNavs (){
    return (
        <div className="footer__navs">
            {footer_navs.map((nav) => (
                <FooterNav key={nav.id} nav={nav}/>
            ))}
        </div>
    ) 
}