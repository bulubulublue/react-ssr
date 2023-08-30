// 客户端项目入口
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './reducers';
import 'babel-polyfill'; //当代码中使用到async时，默认需要配置runtime-generator(实际没有配置也能运行)

import routes from './Routes';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const store = createStore(reducers, {}, applyMiddleware(thunk));
let router = createBrowserRouter(routes);

ReactDOM.hydrateRoot(
  document.getElementById('root'),
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
