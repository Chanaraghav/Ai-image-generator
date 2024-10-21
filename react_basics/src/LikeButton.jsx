import {useState} from "react";
function LikeButton()
{
    let[isliked,setisliked]=useState(true)
function changeColor(){
    setisliked((isliked)=>{
        return !isliked
    })
} 
if(isliked)
{
    return(
        <span onClick={changeColor}>LikeMe<i className="fa-regular fa-heart"></i></span>
    )
}
    else{
    return(
        <span onClick ={changecolor}><i class="fa-solid fa-heart"></i></span>
)}
}
export default LikeButton