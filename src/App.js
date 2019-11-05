import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faves: []
    };

    // this.state = { }
  }

  AddFav = movie => {
    const faves = [...this.state.faves];
    faves.push(movie);

    this.setState({
      faves: faves
    });
  };
  // RemFav = movie => {
  //   faves = faves.slice(movie, x).concat(faves.slice(-x));
  // };
  render() {
    return (
      <div>
        <NavBar
          AddFav={this.AddFav}
          faves={this.state.faves}
          RemFav={this.RemFav}
        />
      </div>
    );
  }
}

export default App;
