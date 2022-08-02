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
      <div className="container">
        <div className="row">
        
          {this.state.rockets.map((rocket) => (

            // <h1 key={rocket.id}>{rocket.name}</h1>
            <div className="card col-sm-6" key={rocket.id}>
  <img src={rocket.flickr_images[1]} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{rocket.name}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">View More</a>
  </div>
</div>
          ) )}
          </div>

      </div>
    );
  }
}

export default App;
