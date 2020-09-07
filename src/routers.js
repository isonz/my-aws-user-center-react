import {HomePage} from "./pages/home.page";
import {AuthPage, PasswordPage} from "./pages/auth";
import {NotFound} from "./pages/not-found.page";
import {ForbiddenPage} from "./pages/forbidden.page";


const routes = [
    {path:'/', component: HomePage, exact: true, requiresAuth: true},
    {path:'/auth', component: AuthPage, exact: true},
    {path:'/auth/password', component: PasswordPage, exact: true},

    {path:'/about', component: HomePage,
        childrens:[
            {path:'/about/my', component:HomePage},
            {path:'/about/you', component:HomePage}
        ]
    },

    {path: '/forbidden', component: ForbiddenPage},
    {path: '*', component: NotFound}
];

export {routes}



// import React from "react";
// import { Redirect } from 'react-router-dom';
// {path:'*', exact: true, render: () => <Redirect to={"/"} /> },