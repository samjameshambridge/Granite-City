import React from "react";

import SideBar from "components/general/SideBar";
import landingImg from "img/landing-page-pic.png";

function Landing() {
  return (
    <div className="landing-page-container">
      <img
        src={landingImg}
        className="landing-img d-lg-block d-none"
        alt="granite"
      />
      <SideBar />
    </div>
  );
}

export default Landing;
