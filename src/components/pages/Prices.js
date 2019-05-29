import React from "react";

import NavBar from "components/navigation/NavBar";
import Title from "components/general/Title";
import bluetriangle from "img/blue-triangle.png";
import yellowtriangle from "img/yellow-triangle.png";
import purpletriangle from "img/purple-triangle.png";

function Prices() {
  return (
    <React.Fragment>
      <NavBar />
      <Title title="granite city prices" className="prices-title" />
      <div className="prices-container row d-flex justify-content-center">
        <div className="col-md-3 d-flex flex-column justify-content-center align-items-center">
          <img
            className="triangle d-none d-md-block mb-5"
            src={yellowtriangle}
            alt="img"
          />
          <h5 className="text-theme-blue letter-spacing-02">DAY PASSES</h5>
          <p className="text-muted m-0">Adult: £10</p>
          <p className="text-muted">Under 16's: £8</p>
        </div>
        <div className="col-md-3 d-flex flex-column justify-content-center align-items-center">
          <img
            className="triangle d-none d-md-block mb-5"
            src={bluetriangle}
            alt="img"
          />
          <h5 className="text-theme-blue letter-spacing-02">MEMBERSHIP</h5>
          <p className="text-muted m-0">Adult: £25/month</p>
          <p className="text-muted">Under 16's: £20/month</p>
        </div>
        <div className="col-md-3 d-flex flex-column justify-content-center align-items-center">
          <img
            className="triangle d-none d-md-block mb-5"
            src={purpletriangle}
            alt="img"
          />
          <h5 className="text-theme-blue letter-spacing-02">GEAR RENTAL</h5>
          <p className="text-muted m-0">Shoes: £4</p>
          <p className="text-muted">Chalk Bag: £2</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Prices;
