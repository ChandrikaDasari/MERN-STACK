import React , { useEffect, useState } from "react";

function Ex2(){
    const [city,setCity]= useState(" ");
    const c=0;
    useEffect(()=>{
        setCity("hyderabad")

    })
    return(
        <div>
            <h1>My state captial:{city}</h1>
            <button onClick={()=>{setCity("Amaravthi")}}>AP</button>
            <button onClick={()=>{setCity("hyderabad")}}>TS</button>
            <button onClick={()=>{setCity("Chennai")}}>TN</button>
            <button onClick={()=>{setCity("Mumbai")}}>MH</button>
        </div>
    )
}
export default Ex2;