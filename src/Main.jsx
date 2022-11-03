import React from "react";
import { Switch, Route } from "react-router-dom";
import { Layout } from "./views/Layout";

export const Main = () => {
  return (
    <Switch>
      <Route path="/" exact component={Layout} />
    </Switch>
  );
};
