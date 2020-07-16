import React, { Component } from "react";

class Header extends Component {
  state = {
    activeBtn: "",
  };
  hendleActiveBtn = (e) => {
    this.setState({ activeBtn: e.target.name });
  };

  render() {
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
            <ul className={"header-menu-list"}>
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
                  onClick={(e) => this.hendleActiveBtn(e)}
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
                  onClick={(e) => this.hendleActiveBtn(e)}
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
                  href="#pageHeader"
                  name="Requirements"
                  onClick={(e) => this.hendleActiveBtn(e)}
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
                  href="#users"
                  name="Users"
                  onClick={(e) => this.hendleActiveBtn(e)}
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
                  onClick={(e) => this.hendleActiveBtn(e)}
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
