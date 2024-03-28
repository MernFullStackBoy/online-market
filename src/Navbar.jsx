import { Link } from "react-router-dom"
import logo from "./components/images/logo.png"

const Navbar = () => {

    function handleBack() {
        history.back()
    }

    return (
        <nav className=" phone:pl-[20px] phone:pr-[20px] justify-between h-[70px] rounded-[20px] pl-[70px] pr-[70px] flex items-center bg-slate-200 ">
            <img className=" w-[40px] " src={logo} alt="Logo" />
            <a className=" phone:hidden animate-pulse font-semibold " href="#shop">Shop Now</a>
            <div className=" flex gap-[40px] ">
                <Link to="/cart">
                    <button className=" btn btn-success flex items-center gap-[10px] font-semibold animate-bounce ">
                        <i className=" fa-solid fa-cart-shopping "></i>
                        <span className="phone:hidden">Cart</span>
                    </button>
                </Link>
                <button onClick={handleBack} className="btn btn-danger flex items-center gap-[10px] font-semibold animate-bounce">
                    <i className=" fa-solid fa-backward "></i>
                    <span className=" phone:hidden ">Back</span>
                </button>
            </div>
        </nav>
    )
}

export default Navbar