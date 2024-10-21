import { useState } from "react";
function counter(){
    let[count,setcount]=useState(0)
function handleclick(){
    setcount(count+1)
}    
    return(
        <>
        <p>count:{count}</p>
        <button onclick={handleclick}>Inc count</button>
        </>
    )
}
export default counter