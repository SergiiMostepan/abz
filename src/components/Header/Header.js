import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className={"header-container-bg"}>
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
              <li className={"header-menu-list-item"}>
                <a href="#aboutMe">About me</a>
              </li>
              <li className={"header-menu-list-item"}>
                <a>Relationships</a>
              </li>
              <li className={"header-menu-list-item"}>
                <a>Requirements</a>
              </li>
              <li className={"header-menu-list-item"}>
                <a href="#users">Users</a>
              </li>
              <li className={"header-menu-list-item"}>
                <a>Sign Up</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
