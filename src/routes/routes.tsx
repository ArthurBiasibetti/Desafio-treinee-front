import React, { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

import PrivateRoute from '../components/PrivateRoute';

const Home = lazy(() => import('../pages/Home'));
const Users = lazy(() => import('../pages/Users/List'));
const Actions = lazy(() => import('../pages/Users/Actions'));
const Error = lazy(() => import('../pages/Error'));
const Login = lazy(() => import('../pages/Login'));

export const Routes = (): React.ReactElement<any, string | React.JSXElementConstructor<any>> | null => {
  const elements = useRoutes([
    {
      path: '/',
      element: (
        <PrivateRoute>
          <Home />
        </PrivateRoute>
      ),
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/funcionarios',
      element: (
        <PrivateRoute>
          <Users />
        </PrivateRoute>
      ),
    },
    {
      path: '/funcionarios/acao/:id',
      element: (
        <PrivateRoute>
          <Actions />
        </PrivateRoute>
      ),
    },
    {
      path: '/funcionarios/acao',
      element: (
        <PrivateRoute>
          <Actions />
        </PrivateRoute>
      ),
    },
    {
      path: '*',
      element: (
        <PrivateRoute>
          <Error />
        </PrivateRoute>
      ),
    },
  ]);

  return elements;
};
