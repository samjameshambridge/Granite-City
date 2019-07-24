import React from "react";
import PropTypes from "prop-types";

import NavBar from "components/navigation/NavBar";

function NotFound({ location }) {
  return (
    <React.Fragment>
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto text-theme-blue text-center text-uppercase pt-5">
            <h1 className="display-3">404</h1>
            <h2>page not found</h2>
            <h3>
              the requested URL
              <span className="text-theme-cyan"> {location.pathname}</span> was
              not found.
            </h3>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

NotFound.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string
  })
};

export default NotFound;
