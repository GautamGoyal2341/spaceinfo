import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component{
  constructor() {
    super();

    this.state = {
      rockets : []
    };
  }

  componentDidMount(){
    fetch("https://api.spacexdata.com/v4/rockets")
    .then((response) =>(response.json()))
    .then(rockets => console.log(rockets))
  }

  render() {
    // function App(){
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
