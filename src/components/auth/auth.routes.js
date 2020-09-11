import {AuthPage} from './pages/auth.page';
import {PasswordPage} from './pages/password.page';

export const authRoutes = [
    {path:'/auth', component: AuthPage, exact: true, requiresAuth: false},
    {path:'/auth/password', component: PasswordPage, exact: true, requiresAuth: false},
];
