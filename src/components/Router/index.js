import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";
import HomePage from '../../views/Home';
import TeamPage from '../../views/Team';
const routes = [
  {
    path: '/',
    page: HomePage
  },
  {
    path: '/team',
    page: TeamPage
  }
];

const Router = () => {
  return <Switch>
    {routes.map((route, key) => {
      const Page = route.page;
      return <Route exact path={route.path} key={key}>
        <Page />
      </Route>
    })}
  </Switch>
}

export default Router;