import React from "react";
class TestBS extends React.Component{
  constructor(props){
    super(props);
    this.state={name:"apple",color:"red/green"}
  }
  change=()=>{
    this.setState({name:"mango", color:"green"})
  }
  render(){
    return(
      <>
      <h1>fruit is {this.state.name}</h1>
      <h1>color is {this.state.color}</h1>
      <button onClick={this.change}>change</button>
      </>
    )
  }
}
export default TestBS;