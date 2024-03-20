import { furnitures } from "../../data/data"
import FurnitureCard from "../Section-3/FurnitureCard"

export default function Furnitures (){
    return (
        <div className="block-3__furnitures">
            {furnitures.map((furniture) => (
                <FurnitureCard key={furniture.id} furniture={furniture}/>
            ))}
        </div>
    )
}