import {useState} from "react"
export default function Ludo()
{
    let [count,setcount]=useState({red:0,green:0,blue:0,yellow:0})
    console.log(count);
    let handleRed=()=>{
        //setcount(count.red+1);
        return setcount({...count,red:count.red+1})
    }
    let handleGreen=()=>{
        //setcount(count.red+1);
        return setcount({...count,green:count.green+1})
    }
    let handleBlue=()=>{
        //setcount(count.red+1);
        return setcount({...count,blue:count.blue+1})
    }
    let handleyellow=()=>{
        //setcount(count.red+1);
        return setcount({...count,yellow:count.yellow+1})
    }


    return(
        <div>
            <div>
                <p>Red moves{count.red}</p>
                <button onClick={handleRed}>+1</button>
            </div>
            <div>
                <p>Green moves{count.green}</p>
                <button onClick={handleGreen}>+1</button>
            </div>
            <div>
                <p>Blue moves{count.blue}</p>
                <button onClick={handleBlue}>+1</button>
            </div>
            <div>
                <p>Yellow moves{count.yellow}</p>
                <button onClick={handleyellow}>+1</button>
            </div>
        </div>
        
    )
}
