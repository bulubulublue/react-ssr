import React from 'react';
import Home from './components/Home';
import UsersList, { loadData } from './components/UsersList';
const { json } = require('react-router-dom');
import createStore from '../helpers/createStore';

export const store = createStore();

const routes = [
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/users',
    Component: UsersList,
    loader: () => loadData(store),
  },
];

export default routes;
