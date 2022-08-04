import { Component, Fragment } from "react";

import "./App.css";
import { Card } from "./components/Card";
import {Modal} from "./components/Modal";

class App extends Component {
  constructor() {
    super();

    this.state = {
      rockets: [],
    };
  }

  componentDidMount() {
    fetch("https://api.spacexdata.com/v4/rockets")
      .then((response) => response.json())
      .then((rockets) => this.setState({ rockets: rockets }));
  }

  render() {
    // function App(){
    return (
      <div className="container">
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
