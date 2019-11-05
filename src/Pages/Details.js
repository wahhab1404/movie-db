import React, { Component } from "react";

class Details extends Component {
  onClick = e => {
    this.props.AddFav(this.props.details);
  };
  render() {
    // console.log(props.AddFav);

    // let moviesDetails = this.props.topRatedMoviesDetail;
    // let details = null;
    // if (this.state.details) {
    //   details = (
    //     <Details details={this.state.details} AddFav={this.props.AddFav} />
    //   );
    // }

    return (
      <div className="details">
        <div className="movieTitle">
          <h1>{this.props.details.title}</h1>
          <button onClick={this.onClick}>ADD TO FAV</button>
        </div>
        {this.props.details.vote_average
          ? ` Vote ${this.props.details.vote_average} `
          : null}
        <p>{this.props.details.overview}</p>

        <h3>
          {this.props.details.release_date
            ? ` Date ${this.props.details.release_date}`
            : null}
        </h3>
        <img
          className="detail-img"
          alt={this.props.details.title}
          src={`https://image.tmdb.org/t/p/w200/${this.props.details.poster_path}`}
        ></img>
      </div>
    );
  }
}

export default Details;
