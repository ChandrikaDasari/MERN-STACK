import React from "react";
function handle(e){
    e.preventDefault();
    console.log(e.target)
    // const data=e.target;
    const fd=new FormData(e.target);
    const abc=Object.fromEntries(fd.entries())
    document.getElementById('1').innerHTML="hello"+ abc.user;
}
function Iphandling(){
    return(
        <div className="Iphandling">
            <form method='post' onSubmit={handle}>
                <label>user name</label>
                <input name="user" defaultValue={"enter value"}/>
                <br/>
                <label>Password</label><br/>
                <input type="password" name="pwd"></input>
                <br/>
                <label><input type="radio" name="gender" value={"Male"}/>Male</label>
                <label><input type="radio" name="gender" value={"Female"}/>Female</label>
                <br/>
                <input type="submit" value={"signin"}></input><br/>
                <h1 id='1'></h1>
            </form>
        </div>
    )
}
export default Iphandling;