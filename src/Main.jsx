import React from "react";
import { Switch, Route } from "react-router-dom";

import { PageSwitch } from "./views/PageSwitch";

export const Main = () => {
  return (
    <Switch>
      <Route path="/" exact component={PageSwitch} />
    </Switch>
  );
};
