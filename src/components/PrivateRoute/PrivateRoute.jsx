import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { usersSelectors } from '../redux/users';

/**
 * - Если маршрут приватный и пользователь залогинен, рендерит компонент
 * - В противном случае рендерит Redirect на /login
 */
const PrivateRoute = ({ component: Component, redirectTo, ...routeProps }) => {
  //ПРИМЕР
  // const isAuthenticated = useSelector(usersSelectors.getIsAuthenticated);
  const isAuthenticated = false;

  return (
    <Route
      {...routeProps}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={redirectTo} />
        )
      }
    />
  );
};

export default PrivateRoute;
