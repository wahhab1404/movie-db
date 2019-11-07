import React, { Component } from "react";
// the page DELETED
class TvShows extends Component {
  constructor(props) {
    super(props);
  }
  //

  render() {
    let topTvArr = null;
    if (topTvArr) {
      topTvArr = this.props.topTv.map((item, key) => {
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
    }
    return <div className="flexCont">{topTvArr}</div>;
  }
}
export default TvShows;
