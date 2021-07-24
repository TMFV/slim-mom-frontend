import { lazy } from 'react';
const HomePage = lazy(() => import('./pages/HomePage'));
const LoginPage = lazy(() =>
  import('./pages/LoginPage' /*webpackChunkName: "login-page" */),
);
const RegistrationPage = lazy(() =>
  import('./pages/RegistrationPage' /*webpackChunkName: "registration-page" */),
);
const Diary = lazy(() => import('./pages/Diary'));
const Page404 = lazy(() => import('./pages/Page404'));

const routes = [
  {
    exact: true,
    path: '/',
    component: HomePage,
    isProtected: false,
  },
  {
    path: '/diary',
    component: Diary,
    isProtected: false,
  },
  {
    exact: false,
    path: '/login',
    label: 'Login',
    component: LoginPage,
    isProtected: false,
  },
  {
    exact: false,
    path: '/register',
    label: 'Signup',
    component: RegistrationPage,
    isProtected: false,
  },
  {
    component: Page404,
    isProtected: false,
  },
];
export default routes;
