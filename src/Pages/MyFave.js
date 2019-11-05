import React, { Component } from "react";
import HomePage from "../Pages/HomePage";
import Details from "../Pages/Details";
class MyFave extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favM2: [],
      details: null
    };
  }

  onClickRm = e => {
    this.props.RemFav(this.props.details);
  };
  getDetails = e => {
    console.log("getDetails", e);
    this.setState({
      details: e // passing state to children
    });
  };
  render() {
    let FavM = <h1>You have NOTHING here :)...</h1>;
    console.log("1", FavM);
    console.info("the propsfavelist", this.props);

    if (this.props.faveList) {
      if (this.props.faveList.length > 0) {
        console.log("2", FavM);
        FavM = this.props.faveList.map(movie => {
          return (
            <div key={movie.id}>
              <div className="imageTitle">{movie.title}</div>
              <img
                onClick={() => this.getDetails(movie)}
                src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
              />
              <link
                href="https://fonts.googleapis.com/css?family=Staatliches&display=swap"
                rel="stylesheet"
              />
            </div>
          );
        });

        // this.setState({
        //   favM2: FavM
        // });
      } else {
        FavM = <h1>You have NOTHING here :)...</h1>;
      }
    }
    // console.log(FaveList, "1");
    console.log("123412341234", this.props.getDetails);
    let details = null;
    if (this.state.details) {
      details = (
        <Details details={this.state.details} AddFav={this.props.AddFav} />
      );
    }
    return (
      <div>
        <h1>YOU ENJOYED THESE MOVIES</h1>
        <div className="flexCont">{FavM}</div>
        {details}
        {/* <Details AddFave={this.props.AddFave} /> */}
      </div>
    );
  }
}

export default MyFave;
