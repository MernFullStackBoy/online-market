import { v4 as uuidv4 } from "uuid"
import womensBag from "../images/womens-bag.png"
import tshirt from "../images/tshirt.webp"
import tshirtRoad from "../images/tshirt-road.png"
import sneakers from "../images/sneakers.png"
import imageTshirt from "../images/image-tshirt.webp"
import sandals from "../images/sandals.png"
import disney from "../images/disney.png"
import jeans from "../images/jeans.png"
import dress from "../images/dress.png"
import leather from "../images/leather.png"
import shoes from "../images/shoes.png"
import purse from "../images/purse.png"
import red_tshirt from "../images/red_tshirt.png"
import blazer from "../images/blazer.png"
import purseLeather from "../images/blazer.webp"

export const shopData = [
    {
        title: "Allen Solly",
        desc: "Women Textured Handheld Bag",
        price: 80,
        image: womensBag,
        id: uuidv4()
    },
    {
        title: "Louis Phillipe Sport",
        desc: "Polo Collar T-Shirt",
        price: 50,
        image: tshirt,
        id: uuidv4()
    },
    {
        title: "Adidas",
        desc: "Men adi-das Runing Shoes",
        price: 60,
        image: sneakers,
        id: uuidv4()
    },
    {
        title: "Roadstar",
        desc: "White cotton T-Shirt",
        price: 38,
        image: tshirtRoad,
        id: uuidv4()
    },
    {
        title: "US Polo",
        desc: "Images Cotton Casual T-Shirt",
        price: 40,
        image: imageTshirt,
        id: uuidv4()
    },
    {
        title: "Zyla",
        desc: "Women Sandals",
        price: 35,
        image: sandals,
        id: uuidv4()
    },
    {
        title: "Yk Disney",
        desc: "Girls Pink Moana Printed Dress",
        price: 80,
        image: disney,
        id: uuidv4()
    },
    {
        title: "Arrow",
        desc: "Casual Blue Jeans",
        price: 50,
        image: jeans,
        id: uuidv4()
    },
    {
        title: "Trendyol",
        desc: "Fload Embroidered Maxi Dress",
        price: 35,
        image: dress,
        id: uuidv4()
    },
    {
        title: "Allen Solly",
        desc: "Brown Leather Jacket",
        price: 60,
        image: leather,
        id: uuidv4()
    },
    {
        title: "Allen Solly",
        desc: "Casual Shoe for Men",
        price: 40,
        image: shoes,
        id: uuidv4()
    },
    {
        title: "Gucci",
        desc: "Leather Hand Purse",
        price: 40,
        image: purse,
        id: uuidv4()
    },
    {
        title: "Yk Disney",
        desc: "Red Printed T-Shirt",
        price: 30,
        image: red_tshirt,
        id: uuidv4()
    },
    {
        title: "Roadstart",
        desc: "Printed Blaze for Men",
        price: 60,
        image: blazer,
        id: uuidv4()
    },
    {
        title: "Flora",
        desc: "Leather Hand Purse",
        price: 80,
        image: purseLeather,
        id: uuidv4()
    },
]