import { useCart } from "../../context/cart-context"
import { useNavigate } from "react-router-dom"
export const Product = ({product}) => {
  const { cartDispatch } = useCart();
  
  const onAddToCartClick = () => {
    cartDispatch({ 
        type: "ADD_TO_CART", 
        payload: product 
    });
  };
  const onRemoveFromCartClick = () => {
    cartDispatch({ 
        type: "REMOVE_FROM_CART", 
        payload: product 
    });
  }

  const navigate = useNavigate();
  const onTitleClick = () => {
    navigate(`/productDetails/${product.id}`)
  }

  return (

    <>
        <div onClick={onTitleClick}>
            <h2>{product.name}</h2>
        </div>
        <div className="flex gap-4px">
            <p>Price - {product.newPrice} || </p>
            <p>Discount - {product.discount} || </p>
            <p>Rating - {product.rating}</p>
        </div>
        <div>
            <button onClick={onAddToCartClick}>Add to Cart</button>
            <button onClick={onRemoveFromCartClick}>Remove from Cart</button>
        </div>
    </>
  )
}