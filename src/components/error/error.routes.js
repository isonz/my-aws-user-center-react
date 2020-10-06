import {ForbiddenPage} from './pages/forbidden.page';
import {NotFound} from './pages/not-found.page';

export const errorRoutes = [
    {path: '/forbidden', component: ForbiddenPage, exact: true, requiresAuth: false},
    {path: '*', component: NotFound, exact: true, requiresAuth: false}
];
