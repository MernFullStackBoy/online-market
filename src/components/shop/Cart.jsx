import { useContext } from "react"
import { AddToCart } from "../context/Context"

const Cart = () => {
    const {
        items,
        emptyCart,
        isEmpty,
        removeItem,
        updateItemQuantity,
    } = useContext(AddToCart)
    return (
        <>
            {isEmpty && <h2 className=" phone:text-[40px] font-semibold text-[70px] opacity-[0.3] uppercase mt-[70px] text-center ">Your Cart is Empty</h2>}
            <table className=" phone:mx-auto ">
                <tbody>
                    {
                        items.map((item) => {
                            return (
                                <tr className=" phone:shadow-[0_0_20px_10px_yellow] phone:p-[20px] phone:rounded-[50px] phone:mx-auto phone:flex phone:flex-col justify-between mt-[50px] flex gap-[50px] mx-auto items-center " key={item.id}>
                                    <td className=" w-[200px] ">
                                        <img className=" w-[200px] " src={item.image} alt="Images" />
                                    </td>
                                    <td className=" phone:text-center phone:h-[0] phone:text-[20px] w-[240px] font-semibold text-[30px] ">{item.title} ( {item.quantity} )</td>
                                    <td className=" text-[50px] phone:h-[40px] text-[green] font-bold ">{item.price}$</td>
                                    <td className=" w-[200px] phone:justify-center flex gap-[30px] ">
                                        <button
                                            onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                                            className=" flex items-center gap-[20px] font-semibold btn btn-success ">
                                            <i className=" fa-solid fa-plus "></i>
                                            <span className="phone:hidden">Inc</span>
                                        </button>
                                        <button
                                            onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                                            className=" flex items-center gap-[20px] font-semibold btn btn-warning ">
                                            <i className=" fa-solid fa-plus "></i>
                                            <span className="phone:hidden">Dec</span>
                                        </button>
                                    </td>
                                    <td className=" w-[200px] ">
                                        <button onClick={() => removeItem(item.id)} className=" flex items-center gap-[20px] font-semibold btn btn-danger">
                                            <i className=" fa-solid fa-xmark "></i>
                                            <span className="phone:hidden">Remove</span>
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
                {!isEmpty && (
                    <button onClick={() => emptyCart()} className=" btn btn-danger flex items-center gap-[20px] mt-[70px] font-semibold ">
                        <i className=" fas fa-trash "></i>
                        <span className="phone:hidden">Empty cart</span>
                    </button>
                )}
            </table>
        </>
    )
}

export default Cart