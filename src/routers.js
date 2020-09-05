import React from 'react'
import {Route, Switch, Redirect } from 'react-router-dom';
import { HomePage } from './pages/home.page';
import { LoginPage } from './pages/login.page';
import { RegisterPage } from './pages/register.page';

export default () => {
    return (
        <Switch>
            <PrivateRoute exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Redirect from="*" to="/" />
        </Switch>
    )
}


export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('user')
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
);
