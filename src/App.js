import { Component } from "react";

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
    .then(rockets => this.setState({rockets :rockets}))
  }

  render() {
    // function App(){
    return (
      <div className="App">
          {this.state.rockets.map((rocket) => (
            <h1 key={rocket.id}>{rocket.name}</h1>
          ) )}

      </div>
    );
  }
}

export default App;
