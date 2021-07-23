import { lazy } from 'react';
const HomePage = lazy(() => import('./pages/HomePage'));
const Diary = lazy(() => import('./pages/Diary'));
const Page404 = lazy(() => import('./pages/Page404'));

const routes = [
  {
    exact: 'exact',
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
    component: Page404,
    isProtected: false,
  },
];
export default routes;
