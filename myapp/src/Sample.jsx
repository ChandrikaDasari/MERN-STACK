// function Grape() {
//     return (<h1>G are sweetest</h1>  );
// }

// function Sample() {
//     return ( <div>
//         <h1>hello</h1>
//         <Grape />
//     </div> );
// }

import React from "react";
// class Sample extends React.Component{
//     constructor(){
//         super();
//         this.fname="navi";
//         this.lname="liney";
//     }
//     render(){
//         return <h1>{this.fname+" "+this.lname}</h1>
//     }
// }


function Sample(){
    // const a=["apple","mango","kiwi"]
    return(
        <div classname="HtmlComponents">
        <form action='./test.html'>
        <label>Enter</label>
        <input type="text"/>
        <input type="submit" value="submit"/>
        </form>
        </div>

    )
        
}
export default Sample;
