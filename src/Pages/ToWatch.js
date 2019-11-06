import React, { Component } from "react";
import HomePage from "../Pages/HomePage";
import Details from "../Pages/Details";
// IAM STILL WORKING ON THIS PAGE
class ToWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      watchList: [],
      details: null
    };
  }

  getDetails = e => {
    this.setState({
      details: e // passing state to children
    });
  };
  render() {
    let watch = <h1>You have nothing here :)...</h1>;

    if (this.props.watch) {
      if (this.props.watch.length > 0) {
        watch = this.props.watch.map(movie => {
          return (
            <div key={movie.id}>
              <div className="imageTitle">{movie.title}</div>
              <img
                onClick={() => this.getDetails(movie)}
                src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
              />
              <button onClick={() => this.props.RemWatch(details)}>
                REMOVE!
              </button>
            </div>
          );
        });
      } else {
        watch = <h1>You have NOTHING here :)...</h1>;
      }
    }

    let details = null;
    if (this.state.details) {
      details = (
        <Details details={this.state.details} AddFav={this.props.AddWatch} />
      );
    }
    return (
      <div>
        <h1>You ara planing to watch :</h1>
        <div className="flexCont">{watch}</div>
        {details}
        <button onClick={() => this.props.clearList()}>CLEAR LIST</button>
      </div>
    );
  }
}

export default ToWatch;
