import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

const renderRoutes = (routes, authed, authPath = process.env.REACT_APP_LOGIN_ENTRANCE, extraProps = {}, switchProps = {}) => routes ? (
    <Switch {...switchProps}>
        {routes.map((route, i) => (
            <Route
                key={route.key || i}
                path={route.path}
                exact={route.exact}
                strict={route.strict}
                render={(props) => {
                    if('undefined' === typeof route.requiresAuth){
                        return <Redirect to={{ pathname: authPath, state: { from: props.location } }} />
                    }else if (authed || !route.requiresAuth || route.path === authPath) {
                        return <route.component {...props} {...extraProps} route={route} />;
                    }
                    return <Redirect to={{ pathname: authPath, state: { from: props.location } }} />
                }}
            />
        ))}
    </Switch>
) : null;

export default renderRoutes