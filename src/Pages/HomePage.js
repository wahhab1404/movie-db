import React, { Component } from "react";

import axios from "axios";
import TrMovies from "../components/TrendingMovies";
import TopRated from "../components/TopRated";
import Details from "./Details";
import MyFave from "./MyFave";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = { result: [], details: "" };
  }
  componentDidMount() {
    // Trending Movies
    axios
      .get(
        "https://api.themoviedb.org/3/trending/movie/day?api_key=901c934e463e9e9fa41c6d7dfac1af2b"
      )
      .then(res => {
        this.setState({ result: res.data.results });
        console.log("1111111111111111111111111111111111111", this.state.result);
      })

      .catch(error => {
        console.log(error);
      });
    // Top Rated Movies
    axios
      .get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=901c934e463e9e9fa41c6d7dfac1af2b"
      )
      .then(res => {
        console.log("top rated", res.data);
        this.setState({
          resultTop: res.data.results,
          topDetails: res.data.results.overview
        });
      })

      .catch(error => {
        console.log(error);
      });
  }
  // Get movie details
  getDetails = e => {
    console.log("getDetails", e);
    this.setState({
      details: e // passing state to children
    });
    // document.querySelector(
    //   ".details"
    // ).style.backgroundImage = `https://image.tmdb.org/t/p/w200/${this.props.details.poster_path}`;
  };

  render() {
    // to hide unused components in Home page
    let details = null;
    let faveDetails = null;
    if (this.state.details) {
      details = (
        <div>
          <Details details={this.state.details} AddFav={this.props.AddFav} />;
        </div>
      );
    }
    if (this.state.fave) {
      faveDetails = <MyFave getDetails={this.getDetails} />;
      console.log("Woorks");
    }
    return (
      <div>
        <TrMovies topMovies={this.state.result} getDetails={this.getDetails} />
        <TopRated
          getDetails={this.getDetails}
          resultTop={this.state.resultTop}
        />
        {details}
      </div>
    );
  }
}
export default HomePage;
