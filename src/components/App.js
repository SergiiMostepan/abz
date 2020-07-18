import React, { Fragment } from "react";
import Header from "./Header/Header";
import Requirements from "./Banner/Banner";
import AboutMe from "./AboutMe/AboutMe";
import Users from "./Users/UsersContainer";
import RegisterForm from "./RegisterForm/RegisterForm";
import Footer from "./Footer/Footer";
import Modal from "./Modal/ModalContainer";

// import "../sass/App.scss";

const App = () => (
  <Fragment>
    <Header />
    <Requirements />
    <AboutMe />
    <Users />
    <RegisterForm />
    <Footer />
    <Modal />
  </Fragment>
);

export default App;
