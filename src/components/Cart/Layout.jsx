import { useSelector } from "react-redux";

export default function Layout (){

    const {showLay} = useSelector((state) => state.layout)

    return <div className={`layout ${showLay && 'layout-active'}`}></div>
}