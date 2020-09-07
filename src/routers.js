import {HomePage} from "./pages/home.page";
import {LoginPage, RegisterPage} from "./pages/auth";
import {TestPage} from "./pages/test.page";
import {NotFound} from "./pages/not-found.page";
import {ForbiddenPage} from "./pages/forbidden.page";


const routes = [
    {path:'/', component: TestPage, exact:true},
    {path:'/home', component: HomePage, exact:true, requiresAuth: true},
    {path:'/login', component: LoginPage, exact:true},
    {path:'/register', component: RegisterPage, exact:true},

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