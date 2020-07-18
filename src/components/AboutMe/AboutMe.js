import React from "react";

const AboutMe = () => (
  <section className={"aboutme-section"} id="aboutMe">
    <div className={"aboutme-container"}>
      <h1 className={"aboutme-header"}>Let's get acquainted</h1>
      <div className={"aboutme-main"}>
        <div className={"aboutme-logo"}>
          <img
            src={require("../../images/man-laptop-v1.svg")}
            // width="339"
            // height="285"
            alt="img description"
          />
        </div>
        <div className={"aboutme-main-info"}>
          <h2 className={"aboutme-main-info-header"}>
            I am cool frontend developer
          </h2>
          <div className={"aboutme-main-info-text"}>
            <p className={"aboutme-main-info-text-paragraph"}>
              We will evaluate how clean your approach to writing CSS and
              Javascript code is. You can use any CSS and Javascript 3rd party
              libraries without any restriction.
            </p>
            <p className={"aboutme-main-info-text-paragraph"}>
              If 3rd party css/javascript libraries are added to the project via
              bower/npm/yarn you will get bonus points. If you use any task
              runner (gulp/webpack) you will get bonus points as well. Slice
              service directory page P​SD mockup​ into HTML5/CSS3.{" "}
            </p>
          </div>
          <div className={"aboutme-main-info-button"}>
            <a href="#registerForm">Sing up now</a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutMe;
