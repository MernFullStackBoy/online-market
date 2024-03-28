import { createContext } from "react";
import { CartProvider, useCart } from "react-use-cart";

export const AddToCart = createContext()

export const AddToCartProvider = ({ children }) => {
    const {
        addItem,
        items,
        emptyCart,
        isEmpty,
        removeItem,
        updateItemQuantity,
        quantity
    } = useCart()

    return (
        <AddToCart.Provider value={{
            addItem,
            items,
            isEmpty,
            emptyCart,
            removeItem,
            updateItemQuantity,
            quantity
        }}>
            {children}
        </AddToCart.Provider>
    )
} 