import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
// import { usersSelectors } from '../redux/users';
/**
 * - Если маршрут ограниченный, и пользователь залогинен, рендерит редирект на /todos
 * - В противном случае рендерит компонент
 */
const PublicRoute = ({ component: Component, redirectTo, ...routeProps }) => {
  //ПРИМЕР
  // const isAuthenticated = useSelector(usersSelectors.getIsAuthenticated);
  const isAuthenticated = false;

  return (
    <Route
      {...routeProps}
      render={props =>
        isAuthenticated && routeProps.restricted ? (
          <Redirect to={redirectTo} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
