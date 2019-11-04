import React, { Component } from "react";
class Details extends Component {
  render() {
    // let moviesDetails = this.props.topRatedMoviesDetail;
    console.log("DDDD", this.props.details);
    return (
      <div>
        <h1>{this.props.details.title}</h1>
        <p>{this.props.details.overview}</p>
      </div>
    );
  }
}

export default Details;
