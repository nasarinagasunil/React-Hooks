import { Text } from '../Text/text'
import { useCount } from "../../context/countContext"
export const Button = () => {
    const { count, setCount } = useCount();

    const onIncrementClick = () => {
        setCount(count + 1);
    }

    return (
        <>
            <button onClick={onIncrementClick}>Click To Increment</button>
            <Text />
        </>
    )
}