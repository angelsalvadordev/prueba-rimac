import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { routes, IRoute } from "routes/routes";

function RouterApp() {
  return (
    <Router>
      <Switch>
        {routes.map(({ path, isExact, Component }: IRoute) => (
          <Route path={path} key={path} exact={isExact}>
            <Suspense fallback={<div>cargando...</div>}>
              <Component />
            </Suspense>
          </Route>
        ))}
        {/* <Route component={NotFoundPage} /> */}
      </Switch>
    </Router>
  );
}

export default RouterApp;
