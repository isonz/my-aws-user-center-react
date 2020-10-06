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
                    if('undefined' === typeof authed) authed = false;
                    //console.log(authed); console.log(route.requiresAuth); console.log(route.path);
                    if(!authed){
                        if('undefined' === typeof route.requiresAuth || route.requiresAuth){
                            return <Redirect to={{ pathname: authPath, state: { from: props.location } }} />
                        }else if(!route.requiresAuth){
                            return <route.component {...props} {...extraProps} route={route} />;
                        }
                    }else{
                        if('' === route.path || '/' === route.path){
                            return <Redirect to="/main/home" />;
                        }
                        return <route.component {...props} {...extraProps} route={route} />;
                    }
                }}
            />
        ))}
    </Switch>
) : null;

export default renderRoutes
