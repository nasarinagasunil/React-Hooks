import { useCount } from "../../context/countContext"
export const Text = () => {
  const { count } = useCount();
  return (
    <>
      <p>Current Count: {count}</p>
    </>
  )
}