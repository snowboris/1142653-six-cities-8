import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { RouteProps } from 'react-router-dom';

type PrivateRouteProps = RouteProps & {
  render: () => JSX.Element,
  authorization: boolean
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { exact, path, render, authorization } = props;
  return (
    <Route
      exact={exact}
      path={path}
      render={() => authorization ? render() : <Redirect to='/login' />}
    />
  );
}

export default PrivateRoute;
