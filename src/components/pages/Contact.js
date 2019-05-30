import React from "react";

import NavBar from "components/navigation/NavBar";
import Map from "components/general/Map";
import Instagram from "img/instagram.svg";
import Facebook from "img/facebook.svg";
import Twitter from "img/twitter.svg";
import LinkedIn from "img/linkedin.svg";

function Contact() {
  return (
    <div>
      <NavBar />
      <div className="contact-container">
        <div className="visit-us-section bg-theme-purple">
          <div className="content text-theme-blue text-center">
            <h2>visit us</h2>
            <Map />
            <h4 className="font-secondary">11 Ann St | Aberdeen | AB25 1SD</h4>
          </div>
        </div>
        <div className="get-in-touch-section bg-theme-cyan">
          <div className="content text-theme-blue">
            <h2 className="text-center">get in touch</h2>
            <h4 className="text-md-right text-center">
              email address
              <br />
              <span className="text-white font-secondary">
                info@granitecity.com
              </span>
            </h4>
            <h4 className="text-md-right text-center">
              phone number
              <br />{" "}
              <span className="text-white font-secondary">022445679</span>
            </h4>
            <div className="contact-social-media-group  text-center">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Instagram} alt="insta" className="cursor-pointer" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={Facebook}
                  alt="facebook"
                  className="facebook bg-white cursor-pointer"
                />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Twitter} alt="twitter" />
              </a>
              <a
                href="https://www.linkedin.samuelhambridge.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={LinkedIn}
                  alt="linkedin"
                  className="linkedin bg-white cursor-pointer"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
