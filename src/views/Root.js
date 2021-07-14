import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { routes } from 'routes';

import MainTemplate from 'templates/MainTemplate';

import Home from 'views/Home';

const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <Switch>
        <Route exact path={routes.home} component={Home} />
      </Switch>
    </MainTemplate>
  </BrowserRouter>
);

export default Root;
