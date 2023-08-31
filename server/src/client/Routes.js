import React from 'react';
import HomePage from './pages/HomePage';
import UsersListPage, { loadData } from './pages/UsersListPage';

const createRoutes = store => [
  {
    path: '/',
    ...HomePage,
  },
  {
    path: '/users',
    Component: UsersListPage,
    loader: () => loadData(store),
  },
];

export default createRoutes;
