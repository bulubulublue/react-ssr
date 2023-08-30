import React from 'react';
import HomePage from './pages/HomePage';
import UsersListPage, { loadData } from './pages/UsersListPage';
import createStore from '../helpers/createStore';

export const store = createStore();

const routes = [
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

export default routes;
