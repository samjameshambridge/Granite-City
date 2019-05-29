import React from "react";

import Navigation from "components//navigation/Navigation";
import Logo from "components/general/Logo";

function SideBar() {
  return (
    <React.Fragment>
      <div className="sidebar-container position-fixed d-flex flex-column justify-content-center align-items-center">
        <Logo className="landing-logo" />
        <Navigation />
      </div>
    </React.Fragment>
  );
}

export default SideBar;
