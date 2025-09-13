import { useCart } from "../../context/cart-context"
export const Navbar = () => {
    const { cart } = useCart();
    return (
        <>
            <h1>Welcome to the Products Blog</h1>
            <h2>Cart Details</h2>
            <p>Total products in Cart: {cart.length}</p>
        </>
    )
}