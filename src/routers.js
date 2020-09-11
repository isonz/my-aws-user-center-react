import {homeRoutes} from "./components/home/home.routes";
import {authRoutes} from "./components/auth/auth.routes";
import {errorRoutes} from "./components/error/error.routes";

const routes = homeRoutes
    .concat(authRoutes)
    .concat(errorRoutes);

export {routes}




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
