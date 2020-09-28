import {MainPage} from "./main.page";
import {homeRoutes} from "./home/home.routes";

export const mainRoutes = [
    {path:'/', component: MainPage, exact: true},
    { path:'/main', component: MainPage,
        routes:homeRoutes
    },
];
