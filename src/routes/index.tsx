import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchTrack from "../pages/SearchPage";
import Home from "../pages/Home";
import Artist from "../pages/Artist";

const AppRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/artist/:id" component={Artist} />
        <Route path="/search" component={SearchTrack} />
      </Switch>
    </Router>
  );
};

export default AppRoutes;
