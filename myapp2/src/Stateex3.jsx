import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function Stateex3() {
    const[count,setCount]=useState(0)
    const[c,setC]=useState(5)
    useEffect(()=>{
        document.title=`${count}`+"new message";
        console.log(c);
    },[count,c])
  return (
    <div>Stateex3

        <button onClick={()=>setCount(count+1)}>clicked {count} times</button>
        <button onClick={()=>setC(c+1)}>clicked {c} times</button>
    </div>
    
  )
}

export default Stateex3