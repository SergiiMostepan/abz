import React, { Component } from "react";
import HeaderMobileMenu from "./HeaderMobileMenu";

class Header extends Component {
  state = {
    activeBtn: "",
    isOpen: false,
  };
  handleActiveBtn = (e) => {
    this.setState({ activeBtn: e.target.name });
  };

  onClickMenu = () => {
    this.setState({ isOpen: !this.state.isOpen });
    console.log(this.state.isOpen);
  };

  render() {
    const { isOpen } = this.state;
    return (
      <header className={"header-container-bg"} id="pageHeader">
        <div className={"header-container header-menu-text"}>
          <div className={"header-logo"}>
            <img
              srcSet={require("../../images/favicon-32x32.png")}
              className={"header-logo-icon"}
              alt="logo"
            />
            <div className={"header-logo-text"}>testtask</div>
          </div>
          <nav>
            <div className={"header-menu-burger"}>
              <img
                onClick={this.onClickMenu}
                src={require("../../images/menu-icon.svg")}
                alt="img description"
              />
            </div>
            <HeaderMobileMenu isOpen={isOpen} onClick={this.onClickMenu} />
            <ul className={"header-menu-list"}>
              <li
                className={
                  this.state.activeBtn === "AboutMe"
                    ? "header-menu-text-avtive"
                    : "header-menu-list-item"
                }
              >
                <a
                  href="#registerForm"
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
                  href="#registerForm"
                  name="Relationships"
                  onClick={(e) => this.handleActiveBtn(e)}
                >
                  Relationships
                </a>
              </li>
              <li
                className={
                  this.state.activeBtn === "Requirements"
                    ? "header-menu-text-avtive"
                    : "header-menu-list-item"
                }
              >
                <a
                  href="#registerForm"
                  name="Requirements"
                  onClick={(e) => this.handleActiveBtn(e)}
                >
                  Requirements
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
                  href="#registerForm"
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
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
