import { useAuth } from "../../context/authContext";
export const Login = () => {
    const { isLoggedIn, setIsLoggedIn } = useAuth();

    const onIsLoggedInClick = () => {
        setIsLoggedIn(!isLoggedIn);
    }

    return (
        <>
            <h1>This is Login Page</h1>
            {
                !isLoggedIn && <label>
                    Mobile Number:
                    <input type="text" name="mobileNumber" placeholder="Enter your mobile number..." />
                </label>
            }

            <button onClick={onIsLoggedInClick}>{isLoggedIn ? "Logout" : "Login"}</button>
        </>
    )
}
