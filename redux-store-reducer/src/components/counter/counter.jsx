import { useDispatch, useSelector } from "react-redux"
export const Counter = () => {
    const dispatch = useDispatch()
    const count = useSelector((state) => state.counter.count)
    const onIncrementClick = () => {
        dispatch({type: 'counter/increment'})
    }
    const onDecrementClick = () => {
        dispatch({type: 'counter/decrement'})
    }
  return (
    <div>
      <button onClick={onIncrementClick}>Increment</button>
      <span>{count}</span>
      <button onClick={onDecrementClick}>Decrement</button>
    </div>
  )
}