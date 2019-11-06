import React, { Component } from "react";

class Details extends Component {
  onClickADD = e => {
    this.props.AddFav(this.props.details);
  };
  onClickWatch = e => {
    this.props.AddWatch(this.props.details);
  };

  render() {
    return (
      <div className="details">
        <div className="movieTitle">
          <h1>{this.props.details.title}</h1>
          <button onClick={this.onClickADD}>ADD TO FAV</button>
          <button onClick={this.onClickWatch}>ADD TO WATCH</button>
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
