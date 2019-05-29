import React from "react";

import NavItem from "components/navigation/NavItem";

function Navigation() {
  return (
    <ul className="landing-navigation-ul flex-column text-center">
      <NavItem linkTo="/our-gym" linkVal="Our Gym" />
      <NavItem linkTo="/prices" linkVal="Prices" />
      <NavItem linkTo="/store" linkVal="Store" />
      <NavItem linkTo="/contact" linkVal="Contact" />
    </ul>
  );
}

export default Navigation;
