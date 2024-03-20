export default function FooterNav ({nav}){
    return (
        <div className="footer__nav">
            <h5 className="footer__h5">{nav.title}</h5>
            <ul className="footer__nav-list">
                {nav.li.map((li, i) => (
                    <li className="footer__nav-list-link" key={i}>{li}</li>  
                ))}
            </ul>
        </div>
    )
}