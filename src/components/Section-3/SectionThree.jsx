import Wrapper from "../UI/Wrapper"

import Furnitures from "./Furnitures"

export default function SectionThree (){
    return (
        <section id="products" className="block-3">
            <Wrapper>
                <div className="block-3__cont">
                    <h3 className="block-3__h3">Наша продукция</h3>
                    <div className="block-3__furnitures-wrap">
                        <Furnitures/>
                    </div>
                </div>
            </Wrapper>
        </section>
    )
}