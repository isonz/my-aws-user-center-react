import {ForbiddenPage} from './pages/forbidden.page';
import {NotFound} from './pages/not-found.page';

export const errorRoutes = [
    {path: '/forbidden', component: ForbiddenPage, requiresAuth: false},
    {path: '*', component: NotFound, requiresAuth: false}
];
