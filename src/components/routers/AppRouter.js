import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { history } from '../../redux/store/configureStore';

import Dashboard from '../dashboard/Dashboard';
import RecipeList from '../recipeList/RecipeList';
import RecipeDetails from '../recipeDetails/RecipeDetails';
import NotFound from '../notFound/NotFound';
import RateLimit from '../notFound/RateLimit';
import ScrollToTop from './ScrollToTop';

const AppRouter = () => (
  <ConnectedRouter history={history}>
    <ScrollToTop>
      <Switch>
        <Route path="/" exact={true} component={Dashboard} />
        <Route path="/recipes/:search?" exact={true} component={RecipeList} />
        <Route path="/recipes/recipe/:id?/:title?" component={RecipeDetails} />
        <Route path="/network-error" component={RateLimit} />
        <Route component={NotFound} />
      </Switch>
    </ScrollToTop>
  </ConnectedRouter>
);

export default AppRouter;
