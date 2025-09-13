import { useParams } from "react-router-dom"
import { products } from "../../db/products"
export const SingleProductDetails = () => {
    const { productId } = useParams();
    console.log("productId", productId);
    const product_name = products.find(({id}) => id === productId);
    return (
        <>
        <h1>Single Product Details</h1>
        <h2>{product_name.name}</h2>
        </>
    )
}