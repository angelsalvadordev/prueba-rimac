import Layout from "components/layout";
import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { routes, IRoute } from "routes/routes";

function RouterApp() {
  return (
    <Router>
      {/* <Layout> */}
      <Switch>
        {routes.map(({ path, isExact, Component }: IRoute) => (
          <Route path={path} key={path} exact={isExact}>
            <Suspense fallback={<span>Espere...</span>}>
              <Component />
            </Suspense>
          </Route>
        ))}
        {/* <Route component={NotFoundPage} /> */}
      </Switch>
      {/* </Layout> */}
    </Router>
  );
}

export default RouterApp;
