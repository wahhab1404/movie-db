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

    // this.state = { }
  }
  componentDidMount() {
    // Trending Movies
    axios
      .get(
        "https://api.themoviedb.org/3/trending/movie/day?api_key=901c934e463e9e9fa41c6d7dfac1af2b"
      )
      .then(res => {
        // console.log('here is axios',res.data)
        this.setState({ result: res.data.results });
        console.log(this.state.result);
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
  getDetails = e => {
    console.log("getDetails", e);
    this.setState({
      details: e // passing state to children
    });
  };

  render() {
    console.log(this.props.AddFav);
    return (
      <div>
        <link
          href="https://fonts.googleapis.com/css?family=Staatliches&display=swap"
          rel="stylesheet"
        />

        <TrMovies topMovies={this.state.result} getDetails={this.getDetails} />
        <TopRated
          getDetails={this.getDetails}
          resultTop={this.state.resultTop}
        />
        <Details details={this.state.details} AddFav={this.props.AddFav} />
        <MyFave getDetails={this.getDetails} />
      </div>
    );
  }
}
export default HomePage;
