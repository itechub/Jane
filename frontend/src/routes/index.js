import React from "react";
import { Route, Switch } from "react-router-dom";

import routes from "./routes";

const registryRoutes = _routes =>
  _routes.map((route, i) => <RouteWrapper key={i} {...route} />);

const RouteWrapper = route => (
  <React.Fragment>
    <Route
      exact
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} />
      )}
    />
    {route.routes && registryRoutes(route.routes)}
  </React.Fragment>
);

const AppRoutes = () => (<Switch>{registryRoutes(routes)}</Switch>);
export default AppRoutes;
