import React, { Component } from "react";
import Details from "../Pages/Details";

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
      item: {}
    };
  }
  //
  showDet = de => {
    this.setState({
      isShow: true,
      item: de
    });
  };
  render() {
    console.log(" THIS IS MOVIES RENDER");
    const nowPlayArr = this.props.nowPlay.map((item, key) => {
      return (
        <div key={item.id}>
          <div className="imageTitle">{item.title} </div>
          <div>
            <img
              className="fade-in"
              onClick={() => this.showDet(item)}
              src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`}
            />
          </div>
        </div>
      );
    });
    return (
      <div>
        <div className="flexCont">
          <h1>TOP MOVIES</h1>
          {nowPlayArr}
        </div>
        <div>{this.state.isShow && <Details details={this.state.item} />}</div>
      </div>
    );
  }
}
export default Movies;
