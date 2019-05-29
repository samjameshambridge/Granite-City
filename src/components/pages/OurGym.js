import React from "react";
import { Link } from "react-router-dom";

import NavBar from "components/navigation/NavBar";

// image imports
import welcomeInfoImg from "img/welcome-info-img.jpg";
import welcomeLandingImg from "img/welcome-landing-img.png";
import BlueTriangle from "img/blue-triangle.png";
import YellowTriangle from "img/yellow-triangle.png";
import PurpleTriangle from "img/purple-triangle.png";
import Shoe from "img/shoe.png";
import Cake from "img/cake.png";
import Chalk from "img/chalk-bag.png";
import CoffeeCup from "img/coffee-cup.png";
import Instagram from "img/instagram.svg";
import Facebook from "img/facebook.png";
import Twitter from "img/twitter.svg";

function OurGym() {
  return (
    <React.Fragment>
      <NavBar />
      <div className="welcome-landing-section">
        <img
          src={welcomeLandingImg}
          className="landing-image d-none d-md-block position-absolute"
          alt="Climbing Wall"
        />
        <div className="welcome-landing-textgroup position-absolute text-center">
          <h2 className="welcome-landing-title display-3 text-uppercase text-theme-blue">
            Welcome to <span>Granite</span> City
          </h2>
          <p className="text-theme-blue">Established 2019</p>
          <span className="downward-arrow d-md-none text-theme-blue">
            &#8595;
          </span>
        </div>
      </div>
      <div className="welcome-info row">
        <div className="col-12 col-md-7">
          <div className="d-flex justify-content-evenly align-items-center">
            <img className="triangle" src={PurpleTriangle} alt="triangle" />
            <p className=" w-50 text-center text-theme-blue">
              New to climbing? Fill out our waiver form to register and come on
              down!
            </p>
          </div>
          <div className="d-flex justify-content-evenly align-items-center h-33">
            <img className="triangle" src={BlueTriangle} alt="triangle" />
            <p className=" w-50 text-center text-theme-blue">
              Experienced climber already? Our routes are graded V0-V9 for the
              novice to the pro
            </p>
          </div>
          <div className="d-flex justify-content-evenly align-items-center h-33">
            <img className="triangle" src={YellowTriangle} alt="triangle" />
            <p className="text-theme-blue w-50 text-center">
              All kids are welcome! We have a special young-uns wall in our kids
              section.
            </p>
          </div>
        </div>
        <div className="col-5 d-md-block d-none">
          <img src={welcomeInfoImg} alt="our-gym" />
        </div>
      </div>
      <div className="welcome-get-started bg-theme-blue">
        <h2 className="welcome-get-started-title text-center text-white">
          All you need to get started
        </h2>
        <div className="row">
          <div className="col-md-4 d-flex flex-column justify-content-center align-items-center">
            <img className="shoe-img" src={Shoe} alt="shoe" />
            <p className="text-theme-yellow mt-4">Climbing Shoes</p>
            <p className="get-started-info text-white text-center text-08 font-secondary">
              Bring your own or rent ours for just £3/day. Check out our store
              if you're looking to buy.
            </p>
          </div>
          <div className="col-md-4 d-flex flex-column justify-content-center align-items-center">
            <img className="chalk-img" src={Chalk} alt="chalk" />
            <p className="text-theme-yellow mt-4">Chalk</p>
            <p className="get-started-info text-white text-center text-08 font-secondary">
              Stop yourself slipping off holds with a rented chalk bag for
              £2/day or buy your own!
            </p>
          </div>
          <div className="col-md-4 d-flex flex-column justify-content-center align-items-center">
            <img className="cake-img" src={Cake} alt="cake" />
            <p className="text-theme-yellow mt-4">Cake</p>
            <p className="get-started-info text-white text-center text-08 font-secondary">
              With all this climbing, you'll need some cake from our cafe
            </p>
          </div>
        </div>
        <div className="get-started-store-group text-center">
          <p className="text-white">Check out our store if you're interesed!</p>
          <button className="bg-theme-yellow text-theme-blue">
            <Link to="/store">store</Link>
          </button>
        </div>
      </div>
      <div className="welcome-cafe d-none d-lg-block">
        <div className="row">
          <div className="col-4 position-relative bg-white">
            <h1 className="welcome-cafe-title display-3 text-theme-blue">
              Granite
              <br />
              City
              <br />
              Cafe
            </h1>
            <h2 className="welcome-cafe-info text-theme-blue text-center font-secondary">
              Tues - Sun <br /> 9am - 4pm
            </h2>
          </div>
          <div className="col-8">
            <img src={CoffeeCup} alt="Coffee Cup" />
          </div>
        </div>
      </div>
      <div className="welcome-see-you-soon">
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Instagram} alt="insta" className="icon cursor-pointer" />
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={Facebook}
            alt="facebook"
            className="icon facebook bg-white cursor-pointer"
          />
        </a>
        <a
          href="https://wwww.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Twitter} alt="twitter" className="icon" />
        </a>
      </div>
    </React.Fragment>
  );
}

export default OurGym;
