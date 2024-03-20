import { socials } from "../../data/data"

export default function FooterSoc (){
    return (
        <div className="footer__soc">
            <h5 className="footer__h5">Мы в соц. сетях</h5>
            <div className="footer__soc-links">
                {socials.map((soc) => (
                    <a className="footer__soc-link" key={soc.id} href="/">
                        <img className="footer__soc-icon" src={soc.icon} alt="Soc_Icon" />
                    </a>
                ))}
            </div>
        </div>
    )
}