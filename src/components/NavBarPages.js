import React from "react";
import Movies from "../Pages/Movies";
import ToWatch from "../Pages/ToWatch";
import TvShows from "../Pages/TvShows";
import HomePage from "../Pages/HomePage";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import MyFave from "../Pages/MyFave";
import Details from "../Pages/Details";

const NavBarPages = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/tvshows">Tv Shows</Link>
        <Link to="/towatch">To Watch</Link>
        <Link to="/myfave">My Favorite</Link>
      </nav>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/movies" component={Movies} />
          <Route path="/tvshows" component={TvShows} />
          <Route path="/towatch" component={ToWatch} />
          <Route path="/myfave" component={MyFave} />
          <Route path="/details" component={Details} />
        </Switch>
      </div>
    </Router>
  );
};
export default NavBarPages;
