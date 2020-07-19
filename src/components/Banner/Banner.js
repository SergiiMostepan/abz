import React from "react";

const Banner = () => (
  <section className={"banner-container"}>
    <div className={"banner-content-container"}>
      <div>
        <h1 className={"banner-header"}>
          Test assignment for Frontend Developer position
        </h1>
        <div className={"banner-text"}>
          <p className={"banner-text-mobile"}>
            We kindly remind you that your test assignment should be submitted
            as a link to github/bitbucket repository.
          </p>
          <p className={"banner-text-desktop"}>
            We kindly remind you that your test assignment should be submitted
            as a link to github/bitbucket repository. Please be patient, we
            consider and respond to every application that meets minimum
            requirements. We look forward to your submission. Good luck! The
            photo has to scale in the banner area on the different screens
          </p>
        </div>
        <div className={"banner-btn"}>
          <a href="#registerForm">
            <p>Sing up now</p>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Banner;
