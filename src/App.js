import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faves: [],
      watch: []
    };
  }
  // ADD TO FAV LIST
  AddFav = movie => {
    const newFave = [...this.state.faves];
    const nameOfMovie = movie.id;
    let exist = false;

    if (newFave.length != 0) {
      for (let i = 0; i < newFave.length; i++) {
        if (newFave[i].id == nameOfMovie) exist = true;
      }
    }
    /// Chick if item is exist
    if (exist == false) {
      console.log("Movie is already there ");
      /// if not it will update the stat with new item
      newFave.push(movie);
      this.setState({
        faves: newFave
      });
    }
  };
  /// ADD TO WATCHLIST ( still working on it )
  AddWatch = movie => {
    console.log("ANa hna");
    const newWatch = [...this.state.watch];
    const nameOfMovie = movie.id;
    let exist = false;
    if (newWatch.length != 0) {
      for (let i = 0; i < newWatch.length; i++) {
        if (newWatch[i].id == nameOfMovie) exist = true;
      }
    }
    if (exist == false) {
      console.log("IFFF");

      newWatch.push(movie);
      this.setState({
        watch: newWatch
      });
    }
  };
  RemFav = movie => {
    const newFaves = [...this.state.faves];
    const faveID = newFaves.findIndex(fave => {
      return fave.id === movie.id;
    });
    newFaves.splice(faveID, 1);
    this.setState({
      faves: newFaves
    });
  };
  RemWatch = movie => {
    const newWatch = [...this.state.watch];
    const watchID = newWatch.findIndex(watch => {
      return watch.id === movie.id;
    });
    newWatch.splice(watchID, 1);
    this.setState({
      watch: newWatch
    });
  };
  /// Clear fave
  clearList = e => {
    this.setState({
      faves: []
    });
  };

  render() {
    return (
      <div>
        <NavBar
          AddFav={this.AddFav}
          AddWatch={this.AddWatch}
          faves={this.state.faves}
          watch={this.state.watch}
          onClickRm={this.onClickRm}
          clearList={this.clearList}
          RemFav={this.RemFav}
          RemWatch={this.RemWatch}
        />
      </div>
    );
  }
}

export default App;
