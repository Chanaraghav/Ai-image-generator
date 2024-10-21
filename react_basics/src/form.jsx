import React from 'react'
import { useState } from 'react'
const form = () => {
    let [user,setuser]=useState("")
  return (
    <form action="">
        <input type="text" placeholder='username' value={user} /><br />
        <input type="password" placeholder='password'  /><br />
        <button>submit</button>
    </form>
  )
}
export default form