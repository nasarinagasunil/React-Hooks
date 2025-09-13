import { useNavigate } from 'react-router-dom';
export const Home = () => {
    const navigate = useNavigate();

    const onGoToCartClick = () => {
        navigate('/cart');
    }

    return(
        <>
            <h1>This is Home Page</h1>
            <button onClick={onGoToCartClick}>Go To Cart</button>
        </>
    )
}