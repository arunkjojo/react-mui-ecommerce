import { useUIContext } from "../context/ui";

export default function useCart(product) {
    const { cart, setCart } = useUIContext();

    const addToCart = () => {
        cart.findIndex(cartItem => cartItem.id === product.id) >= 0 
            ? setCart(cart.filter(cartItem => cartItem.id !== product.id))
            : setCart(cartItem => [...cartItem, product]);
    }

    const addToCartText =  cart.findIndex(cartItem => cartItem.id === product.id) >= 0 
        ? "Remove from Cart"
        : "Add to Cart";
        
    return {
        addToCart,
        addToCartText
    }
}