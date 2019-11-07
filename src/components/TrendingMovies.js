import React, { Component } from "react";

class TrMovies extends Component {
  render() {
    let TopM;
    if (this.props.topMovies) {
      if (this.props.topMovies.length > 0) {
        TopM = this.props.topMovies.map(movie => {
          return (
            <div className=".container" key={movie.id}>
              <img
                className="fade-in"
                alt="MoviePoster"
                onClick={() => this.props.getDetails(movie)}
                src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
              />
            </div>
          );
        });
      } else {
        TopM = <h1>Loading...</h1>;
      }
    }
    return (
      <div>
        <div>
          <h1 className="fade-in">Trending Movie This Week </h1>
        </div>
        <div className="flexCont">{TopM}</div>
      </div>
    );
  }
}

export default TrMovies;
