import React from 'react'
import { useState } from 'react'

function Stateex2() {
    const obj={name:"",count:0}
    const [details,setDetails]=useState(obj);
    const thandler=(e)=>{
        setDetails((prev)=>({...prev,name:e.target.value}))
    }
    const bhandler=(e)=>{
        setDetails((prev)=>({...prev,count:prev.count+1}))
    }
    console.log(details)
  return (
    <div>
        <input type="text" onChange={thandler}/>
        <button onClick={bhandler}>clicked {details.count} times</button> 
        <h4>text you typed: {details.name}</h4>
    </div>
  )
}

export default Stateex2