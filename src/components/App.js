import { Switch, Route } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import routes from '../routes';

import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';

/* ПРИМЕР ИМПОРТА ФАЙЛОВ КОЛЛЕКЦИИ ИЗ РЕДАКСА */
// import { usersOperations, usersSelectors } from './redux/users';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

// import { Component } from 'react';
// import Loader from './components/Loader';

/* НЕ ЗАБЫВАЕМ, ЧТО ПОДКЛЮЧЕНИЕ РАУТОВ ДОЛЖНО БЫТЬ РЕАЛИЗОВАНО ЧЕРЕЗ lazy load */

export default function App() {
  // const isLoading = useSelector();
  const dispatch = useDispatch();
  const onRefresh = () => {
    dispatch(authOperations.currentUser());
  };

  useEffect(() => {
    onRefresh();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    // getCurrentUser
  }, []);

  return (
    <div className="App">
      <Suspense fallback={'loading'} /* fallback={Loader} */>
        {/* {isLoading ? <Loader /> : */}
        <Switch>
          {routes.map(({ path, isProtected, exact, component: Component }) =>
            isProtected ? (
              <PrivateRoute
                exact={exact}
                key={path}
                path={path}
                component={Component}
              />
            ) : (
              <PublicRoute
                exact={exact}
                key={[path]}
                path={path}
                component={Component}
              />
            ),
          )}
        </Switch>
      </Suspense>
    </div>
  );
}
