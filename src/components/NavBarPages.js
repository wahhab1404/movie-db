import React from "react";
import MoviesAPI from "../Pages/MoviesAPI";
import ToWatch from "../Pages/ToWatch";
import TvShows from "../Pages/TvShows";
import HomePage from "../Pages/HomePage";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import MyFave from "../Pages/MyFave";
import Details from "../Pages/Details";

const NavBarPages = props => {
  return (
    <Router>
      <nav className="fade-in">
        <Link to="/" className="fade-in">
          Home
        </Link>
        <Link to="/movies" className="fade-in">
          Movies
        </Link>
        <Link to="/tvshows" className="fade-in">
          Tv Shows
        </Link>
        <Link to="/towatch" className="fade-in">
          To Watch
        </Link>
        <Link to="/myfave" className="fade-in">
          My Favorite
        </Link>
      </nav>
      <div>
        <Switch>
          <Route
            exact
            path="/"
            component={() => <HomePage AddFav={props.AddFav} />}
          />
          <Route path="/movies" component={MoviesAPI} />
          <Route
            path="/tvshows"
            component={() => <TvShows topTv={props.topTv} />}
          />
          <Route path="/towatch" component={ToWatch} />
          <Route
            path="/myfave"
            component={() => (
              <MyFave
                faveList={props.faves}
                clearList={props.clearList}
                onClickRm={props.onClickRm}
              />
            )}
          />
          <Route
            path="/details"
            component={() => (
              <Details
                AddFav={props.AddFav}
                RemFav={this.RemFav}
                AddWatch={props.AddWatch}
                watch={props.watch}
              />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
};
export default NavBarPages;
