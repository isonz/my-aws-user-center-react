import {authRoutes} from "./components/auth/auth.routes";
import {errorRoutes} from "./components/error/error.routes";
import {mainRoutes} from "./components/main.routes";

const routes = mainRoutes
    .concat(authRoutes)
    .concat(errorRoutes);

export {routes}

console.log(routes);


/**
 import React from "react";
 import { Redirect } from 'react-router-dom';
 {path:'*', exact: true, render: () => <Redirect to={"/"} /> },

 { path:'/about', component: HomePage,
    childrens:[
        {path:'/about/my', component:HomePage},
        {path:'/about/you', component:HomePage}
    ]
 },

 */
