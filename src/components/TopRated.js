import React, { Component } from "react";

// import HomePage from "../Pages/HomePage";

class TopRated extends Component {
  render() {
    // console.log(this.props.resultTop, "top movies");
    let TopRatedM;
    if (this.props.resultTop) {
      if (this.props.resultTop.length > 0) {
        TopRatedM = this.props.resultTop.map(movie => {
          return (
            <div key={movie.id}>
              <img
                className="fade-in"
                onClick={() => this.props.getDetails(movie)}
                src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
              />
            </div>
          );
        });
      } else {
        TopRatedM = <h1>Loading...</h1>;
      }
    }
    return (
      <div>
        <h1 className="fade-in">Top Movies </h1>
        <div className="flexCont">{TopRatedM}</div>
      </div>
    );
  }
}
export default TopRated;
