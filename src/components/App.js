import React, { Fragment } from "react";
import Header from "./Header/Header";
import Requirements from "./Banner/Banner";
import AboutMe from "./AboutMe/AboutMe";
import Users from "./Users/UsersContainer";
import "../sass/App.scss";

const App = () => (
  <Fragment>
    <Header />
    <Requirements />
    <AboutMe />
    <Users />
  </Fragment>
);

export default App;
