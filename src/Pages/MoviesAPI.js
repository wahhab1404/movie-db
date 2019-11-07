import React, { Component } from "react";
import axios from "axios";
import Movies from "../Pages/Movies";
import NavBar from "../components/NavBar";

class MoviesAPI extends Component {
  constructor(props) {
    super(props);
    this.state = { playN: [], topTv: [] };
  }
  componentDidMount() {
    // Play Now Movies
    axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=901c934e463e9e9fa41c6d7dfac1af2b"
      )
      .then(res => {
        // // console.log('here is axios',res.data)
        this.setState({
          playN: res.data.results
        });
        console.log("now playing");
      })

      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Movies nowPlay={this.state.playN} />

        <link
          href="https://fonts.googleapis.com/css?family=Staatliches&display=swap"
          rel="stylesheet"
        />
      </div>
    );
  }
}

export default MoviesAPI;
