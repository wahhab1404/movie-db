import React, { Component } from "react";
import HomePage from "../Pages/HomePage";
import Details from "../Pages/Details";
class MyFave extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favM2: [],
      details: null
    };
  }
  // get movie detail
  getDetails = e => {
    this.setState({
      details: e // passing state to children
    });
  };

  render() {
    let FavM = <h1>You have NOTHING here :)...</h1>;
    // Chick if array has date
    if (this.props.faveList) {
      if (this.props.faveList.length > 0) {
        // if array has items it will do the map function
        FavM = this.props.faveList.map(movie => {
          return (
            <div key={movie.id}>
              <div className="imageTitle">{movie.title}</div>
              <img
                onClick={() => this.getDetails(movie)}
                src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
              />
              <button onClick={() => this.props.clearList(details)}>
                REMOVE!
              </button>
              {/* font link */}
              <link
                href="https://fonts.googleapis.com/css?family=Staatliches&display=swap"
                rel="stylesheet"
              />
            </div>
          );
        });
      } else {
        FavM = (
          <div className="textAligne">
            <h1>You have NOTHING here :)...</h1>
          </div>
        );
      }
    }
    // Hiding unused Components
    let details = null;
    if (this.state.details) {
      details = (
        <Details details={this.state.details} AddFav={this.props.AddFav} />
      );
    }
    return (
      <div>
        <h1>YOUR LIST</h1>
        <div className="flexCont">{FavM}</div>
        {details}
        <div className="buttCont">
          <button onClick={() => this.props.clearList(details)}>
            CLEAR LIST
          </button>
        </div>
      </div>
    );
  }
}

export default MyFave;
