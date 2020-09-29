import {MainPage} from "./main.page";
import {homeRoutes} from "./home/home.routes";
import {userRoutes} from "./user/user.routes";
import {settingRoutes} from "./setting/setting.routes";
import {myRoutes} from "./my/my.routes";

export const mainRoutes = [
    {path:'/', component: MainPage, exact: true},
    { path:'/main', component: MainPage,
        routes:homeRoutes
            .concat(userRoutes)
            .concat(myRoutes)
            .concat(settingRoutes)
    },
];
