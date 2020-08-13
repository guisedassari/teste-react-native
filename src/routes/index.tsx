import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "../pages/Dashbord";
import Lists from "../pages/Lists";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/Lists" component={Lists} />
  </Switch>
);

export default Routes;
