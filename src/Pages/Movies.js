import React, { Component } from "react";

class Movies extends Component {
  constructor(props) {
    super(props);
  }
  //

  render() {
    const nowPlayArr = this.props.nowPlay.map((item, key) => {
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
    return <div className="flexCont">{nowPlayArr}</div>;
  }
}
export default Movies;
