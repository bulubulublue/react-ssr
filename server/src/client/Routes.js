import React from 'react';
import HomePage from './pages/HomePage';
import UsersListPage, { loadData } from './pages/UsersListPage';
import App, { loadData as appLoadData } from './pages/App';

const createRoutes = store => [
  {
    Component: App,
    loader: () => appLoadData(store),
    children: [
      {
        path: '/',
        ...HomePage,
      },
      {
        path: '/users',
        Component: UsersListPage,
        loader: () => loadData(store),
      },
    ],
  },
];

export default createRoutes;
