import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Base from './Base';
import Home from './Home';
// import About from './About';
import PageNotFound from './PageNotFound';

import './App.module.css';

const App: React.VFC = () => (
  <Base>
    <Switch>
      <Route exact path="/" component={Home} />
      {/* <Route exact path="/example" component={About} /> */}
      {/* <Route
        exact
        path="/example/two-deep"
        component={ExampleTwoDeepComponent}
      />
      <Route
        exact
        path="/sitemap-link-generator"
        component={SitemapLinkGenerator}
      /> */}
      <Route component={PageNotFound} />
    </Switch>
  </Base>
);

export default App;
