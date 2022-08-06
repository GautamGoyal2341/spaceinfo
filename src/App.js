import { Component, Fragment } from "react";

import "./App.css";
import { Card } from "./components/Card";
import { Filter } from "./components/Filter";
import {Modal} from "./components/Modal";

class App extends Component {
  constructor() {
    super();

    this.state = {
      rockets: [],
      selectheight : 0
    };
  }

  componentDidMount() {
    fetch("https://api.spacexdata.com/v4/rockets")
      .then((response) => response.json())
      .then((rockets) => this.setState({ rockets: rockets }));
  }
  handelChange(e){
    this.setState({selectheight : e.target.value})

  }

  render() {
    // function App(){
    return (
      <div className="container">
        <h1>SpaceX Rockets</h1>
        <Filter onChange= {this.handelChange} />
        <div className="row">
          {this.state.rockets.map((rocket) => (
            // <h1 key={rocket.id}>{rocket.name}</h1>
            <Fragment>
              <Card rocket={rocket} />

             <Modal rocket={rocket} />
            </Fragment>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
