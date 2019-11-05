import React, { Component } from "react";
import MoviesAPI from "./MoviesAPI";

class Movies extends Component {
  constructor(props) {
    super(props);
  }
  //

  render() {
    console.log("HELOOOOOOOOOOOOOO", this.props.nowPlay);
    const allArr = this.props.nowPlay.map((item, key) => {
      return (
        <div>
          <div className="imageTitle">{item.title} </div>
          <div key={item.id}>
            <img
              className="fade-in"
              onClick={() => this.props.getDetails(item)}
              src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`}
            />
          </div>
        </div>
      );
    });
    return (
      <div className="flexCont">
        {/* console.log(); */}
        {allArr}
      </div>
    );
  }
}
export default Movies;
