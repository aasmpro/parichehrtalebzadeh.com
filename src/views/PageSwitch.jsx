import React from "react";

import { Home } from "./Home";
import { AboutMe } from "./AboutMe";
import { MyWork } from "./MyWork";
import { ContactMe } from "./ContactMe";

export const PageSwitch = () => {
  if (window.location.hash === "#AboutMe") {
    window.scrollTo(0, 0);
    return <AboutMe />;
  } else if (window.location.hash === "#MyWork") {
    window.scrollTo(0, 0);
    return <MyWork />;
  } else if (window.location.hash === "#ContactMe") {
    window.scrollTo(0, 0);
    return <ContactMe />;
  }
  return <Home />;
};
