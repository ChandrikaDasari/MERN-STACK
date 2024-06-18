import React ,{useState} from "react";
function Stateex1(){
    const[name,setName]=useState("abc")
    const[count,setCount]=useState(0)
    return (
        <div>
            <input type="text" onChange={(e)=>setName(e.target.value)}/>
            <button onClick={(e)=>setCount(count+1)}>clicked{count} times</button>
            <h1>Text from input:{name}</h1>
        </div>

    )
}
export default Stateex1