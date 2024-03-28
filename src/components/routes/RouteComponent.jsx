import { Route, Routes } from "react-router-dom"
import Maindash from "../shop/Maindash"
import Cart from "../shop/Cart"

const RouteComponent = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Maindash />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </div>
    )
}

export default RouteComponent