import { memo } from "react"
export const Search = memo(({handleChange}) =>{
    console.log("Search renderd")
    return(
        <input type="text" onChange={(e)=>handleChange(e.target.value)} placeholder="Search brand..." />
    )
})
