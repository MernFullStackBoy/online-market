import { useContext, useState } from "react"
import { AddToCart } from "../context/Context"
import { shopData } from "../data/data"
import Card from "./Card"
import { CartProvider } from "react-use-cart"
import shop from "../images/shop.jpg"

const Maindash = () => {
    const { addItem } = useContext(AddToCart)
    return (
        <div>
            <img className=" phone:w-[95%] w-[80%] mx-auto mt-[20px] rounded-[20px] drop-shadow-[0_20px_30px_black] " src={shop} alt="Shop" />
            <div id="shop" className=" flex flex-wrap justify-center mt-[100px] ">
                {shopData.map(item => (
                    <Card key={item.id} props={item} item={item} onClick={() => {
                        addItem(item)
                        return alert("Added")
                    }} />
                ))}
            </div>
        </div>
    )
}

export default Maindash