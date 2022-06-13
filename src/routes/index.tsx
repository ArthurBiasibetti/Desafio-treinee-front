import React from 'react';
import { Routes as ReactRoutes } from './routes';

// components;
import Loader from '../components/Loader';

const Routes: React.FunctionComponent = () => (
  <React.Suspense fallback={<Loader />}>
    <ReactRoutes />
  </React.Suspense>
);

export default Routes;
