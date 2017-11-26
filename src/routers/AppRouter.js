
import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory';

// Components
import Dashboard from '../components/Dashboard'
import NotFound from '../components/NotFound'
import Login from '../components/Login';
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
    <div>
        <Switch>
            <PublicRoute path="/" component={Login} exact={true}/>
            <PrivateRoute path="/dashboard" component={Dashboard}/>
            <PublicRoute component={NotFound}/>
        </Switch>
    </div>
    </Router>
)

export default AppRouter