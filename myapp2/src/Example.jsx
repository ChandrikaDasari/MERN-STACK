import React from "react";
let x="";
class Example extends React.Component{
    constructor(props){
        super(props);
        this.state={name:"apple",color:"green/yellow"}
  }
  static getDerivedStateFromProps(nextProps, prevState){
    prevState.color=nextProps.color;
  }
  getSnapshotBeforeUpdate(){
    x=this.state.color;
    console.log(x);
    return x;
  }
  
  componentDidMount(){
    setTimeout(()=>{
        this.setState({color:"red"})
    },3000);
  }
  shouldComponentUpdate(){
    return true;
  }
  change=()=>{
    this.setState({color:"green"})
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
export default Example;