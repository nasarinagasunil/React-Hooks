import { useAuth } from "../../context/authContext"
import { Navigate } from "react-router-dom";

export const PrivateRouter = ({children}) => {
    const { isLoggedIn } = useAuth();

    if (!isLoggedIn) {
        return <Navigate to="/login" />;
    }

    return children;
}


