import { Switch, Route } from 'react-router-dom';
import { lazy, Suspense , useEffect} from 'react';
import routes from './routes';

/* ПРИМЕР ИМПОРТА ФАЙЛОВ КОЛЛЕКЦИИ ИЗ РЕДАКСА */
// import { usersOperations, usersSelectors } from './redux/users';

import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
// import Loader from './components/Loader';

/* НЕ ЗАБЫВАЕМ, ЧТО ПОДКЛЮЧЕНИЕ РАУТОВ ДОЛЖНО БЫТЬ РЕАЛИЗОВАНО ЧЕРЕЗ lazy load */

const HomePage = lazy(() => import('./pages/HomePage' /* webpackChunkName: "main-page" */))
// ДРУГИЕ СТРАНИЦЫ
const Page404 = lazy(() => import('./pages/Page404' /* webpackChunkName: "404-page" */))

export default function App() {
  // const isLoading = useSelector();

  useEffect(() => {
    // getCurrentUser 
  }, []);

  return (
    <div className="App">
      <Suspense fallback={"loading"}  /* fallback={Loader} */ >
        {/* {isLoading ? <Loader /> : */}
          <Switch>
            {/* как используем маршрут */ }
            <PublicRoute path={routes.HomePage} exact>
              <HomePage />
            </PublicRoute>
          
          {/* другие маршруты */ }
          
            <Route component={Page404} />
          </Switch>
        {/* } */}
      </Suspense>
    </div>
  )
}