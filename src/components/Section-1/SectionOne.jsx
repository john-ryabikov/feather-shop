import Wrapper from "../UI/Wrapper"

import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function SectionOne (){
    return (
        <section className="block-1">
            <Wrapper>
                <div className="block-1__cont">
                    <div className="block-1__text-box">
                        <h1 className="block-1__h1">Продуманный<br/>и удобный</h1>
                        <p className="block-1__sub-h">Мы строим наши предложения по принципу, что каждый заслуживает высококачественного дизайна без высоких затрат. Мы предлагаем арендный инвентарь повышенной вместимости, чтобы преобразить Ваше пространство. Повторное использование и переработка - мы принимаем решение легко, как перышко.</p>
                        <AnchorLink className="block-1__btn" href="#products">Смотерть товары</AnchorLink>
                    </div>
                    <img className="block-1__img" src="img/Section-1/block-1_img.jpg" alt="Img" />
                </div>
            </Wrapper>
        </section>
    )
}