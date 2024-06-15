
import './Sample.css'
import './App.css';
// import Mango from './Mango';
// import Sample from './Sample';
// const a=["apple","mango","kiwi"]
import React from 'react';
import Sample from './Sample.jsx'

class Person extends React.Component{
  render(){
    return <h1>this is component</h1>
  }
}

function Cal(props){
  let f=1;
  for(let i=1;i<=props.value;i++){
    f=f*i;
  }
  return <h1>factorial of {props.value} = {f}</h1>
}
function App() {
  return (
    <div className="App">
      
      <Cal value="5"/>
      <h1>images</h1>
      <img className='img' src="https://picsum.photos/1000/700"/>
      <img className="img" src="/img1.jpg"/>
      <Person />
      <Sample />
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit non cupiditate a, at ipsa laborum, maiores nesciunt ut omnis, repudiandae in. Quis beatae repellat aut voluptatum doloremque. Facere, blanditiis explicabo.</p>
    </div>
  );
}

export default App;
