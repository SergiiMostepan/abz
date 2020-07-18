import React, { Component } from "react";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

class HeaderMobileMenu extends Component {
  state = {
    activeBtn: "",
  };
  handleActiveBtn = (e) => {
    this.setState({ activeBtn: e.target.name });
  };

  render() {
    return (
      <ReactModal
        isOpen={this.props.isOpen}
        contentLabel="onRequestClose Example"
        onRequestClose={this.props.onClick}
        className={"modal-menu"}
        overlayClassName={"overlay-menu"}
      >
        <div className={"header-logo-mobile"}>
          <img
            srcSet={require("../../images/favicon-32x32.png")}
            className={"header-logo-icon"}
            alt="logo"
          />
          <div className={"header-logo-text"}>testtask</div>
        </div>
        <ul className={"header-menu-list header-menu-list-active"}>
          <div className={"header-menu-list-nav-section"}>
            <li
              className={
                this.state.activeBtn === "AboutMe"
                  ? "header-menu-text-avtive"
                  : "header-menu-list-item"
              }
            >
              <a
                href="#aboutMe"
                name="AboutMe"
                onClick={(e) => this.handleActiveBtn(e)}
              >
                About me
              </a>
            </li>
            <li
              className={
                this.state.activeBtn === "Relationships"
                  ? "header-menu-text-avtive"
                  : "header-menu-list-item"
              }
            >
              <a
                href="#pageHeader"
                name="Relationships"
                onClick={(e) => this.handleActiveBtn(e)}
              >
                Relationships
              </a>
            </li>
            <li
              className={
                this.state.activeBtn === "Users"
                  ? "header-menu-text-avtive"
                  : "header-menu-list-item"
              }
            >
              <a
                href="#users"
                name="Users"
                onClick={(e) => this.handleActiveBtn(e)}
              >
                Users
              </a>
            </li>
            <li
              className={
                this.state.activeBtn === "SingUp"
                  ? "header-menu-text-avtive"
                  : "header-menu-list-item"
              }
            >
              <a
                href="#registerForm"
                name="SingUp"
                onClick={(e) => this.handleActiveBtn(e)}
              >
                Sign Up
              </a>
            </li>
            <li
              className={
                this.state.activeBtn === "Terms"
                  ? "header-menu-text-avtive"
                  : "header-menu-list-item"
              }
            >
              <a
                href="#registerForm"
                name="Terms"
                onClick={(e) => this.handleActiveBtn(e)}
              >
                Terms and Conditions
              </a>
            </li>
          </div>
          <div className={"header-menu-list-nav-section"}>
            <li
              className={
                this.state.activeBtn === "Howitworks"
                  ? "header-menu-text-avtive"
                  : "header-menu-list-item"
              }
            >
              <a
                href="#registerForm"
                name="Howitworks"
                onClick={(e) => this.handleActiveBtn(e)}
              >
                How it works
              </a>
            </li>
            <li
              className={
                this.state.activeBtn === "Partnership"
                  ? "header-menu-text-avtive"
                  : "header-menu-list-item"
              }
            >
              <a
                href="#registerForm"
                name="Partnership"
                onClick={(e) => this.handleActiveBtn(e)}
              >
                Partnership
              </a>
            </li>
            <li
              className={
                this.state.activeBtn === "Help"
                  ? "header-menu-text-avtive"
                  : "header-menu-list-item"
              }
            >
              <a
                href="#registerForm"
                name="Help"
                onClick={(e) => this.handleActiveBtn(e)}
              >
                Help
              </a>
            </li>
            <li
              className={
                this.state.activeBtn === "Leavetestimonial"
                  ? "header-menu-text-avtive"
                  : "header-menu-list-item"
              }
            >
              <a
                href="#registerForm"
                name="Leavetestimonial"
                onClick={(e) => this.handleActiveBtn(e)}
              >
                Leave testimonial
              </a>
            </li>
            <li
              className={
                this.state.activeBtn === "Contactus"
                  ? "header-menu-text-avtive"
                  : "header-menu-list-item"
              }
            >
              <a
                href="#registerForm"
                name="Contactus"
                onClick={(e) => this.handleActiveBtn(e)}
              >
                Contact us
              </a>
            </li>
          </div>
          <div className={"header-menu-list-nav-section"}>
            <li
              className={
                this.state.activeBtn === "Articles"
                  ? "header-menu-text-avtive"
                  : "header-menu-list-item"
              }
            >
              <a
                href="#registerForm"
                name="Articles"
                onClick={(e) => this.handleActiveBtn(e)}
              >
                Articles
              </a>
            </li>
            <li
              className={
                this.state.activeBtn === "Ournews"
                  ? "header-menu-text-avtive"
                  : "header-menu-list-item"
              }
            >
              <a
                href="#registerForm"
                name="Ournews"
                onClick={(e) => this.handleActiveBtn(e)}
              >
                Our news
              </a>
            </li>
            <li
              className={
                this.state.activeBtn === "Testimonials"
                  ? "header-menu-text-avtive"
                  : "header-menu-list-item"
              }
            >
              <a
                href="#registerForm"
                name="Testimonials"
                onClick={(e) => this.handleActiveBtn(e)}
              >
                Testimonials
              </a>
            </li>
            <li
              className={
                this.state.activeBtn === "Licenses"
                  ? "header-menu-text-avtive"
                  : "header-menu-list-item"
              }
            >
              <a
                href="#registerForm"
                name="Licenses"
                onClick={(e) => this.handleActiveBtn(e)}
              >
                Licenses
              </a>
            </li>
            <li
              className={
                this.state.activeBtn === "PrivacyPolicy"
                  ? "header-menu-text-avtive"
                  : "header-menu-list-item"
              }
            >
              <a
                href="#registerForm"
                name="PrivacyPolicy"
                onClick={(e) => this.handleActiveBtn(e)}
              >
                Privacy Policy
              </a>
            </li>
          </div>
        </ul>
      </ReactModal>
    );
  }
}

export default HeaderMobileMenu;
