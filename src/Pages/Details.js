import React, { Component } from "react";
class Details extends Component {
  render() {
    let moviesDetails = this.props.topRatedMoviesDetail;
    console.log(moviesDetails, "D");
    return (
      <div>
        <p>{moviesDetails}</p>
      </div>
    );
  }
}

export default Details;
