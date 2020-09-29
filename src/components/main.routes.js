import {MainPage} from "./main.page";
import {homeRoutes} from "./home/home.routes";
import {userRoutes} from "./user/user.routes";

export const mainRoutes = [
    {path:'/', component: MainPage, exact: true},
    { path:'/main', component: MainPage,
        routes:homeRoutes.concat(userRoutes)
    },
];
