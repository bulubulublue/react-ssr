import React from 'react';
import Home from './components/Home';
import UsersList, { loadData } from './components/UsersList';
const { json } = require('react-router-dom');

const routes = [
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/users',
    Component: UsersList,
    loader() {
      console.log('load data');
      return json({ message: 'Welcome to React Router!' });
    },
  },
];

export default routes;
