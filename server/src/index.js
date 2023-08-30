// const express = require('express');
// const renderToString = require('react-dom/server').renderToString;
// const React = require('react');
// const Home = require('./client/components/Home').default;

import express from 'express';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
import 'babel-polyfill'; //当代码中使用到async时，默认需要配置runtime-generator(实际没有配置也能运行)
import { matchRoutes } from 'react-router-config';

const app = express();
app.use(express.static('public')); // <- 通过这样配置，会自动在bundle.js前自动添加 public/

//这里使用了jsx语法，node环境无法识别，所以需要babel进行编译
// 将路由该为*，这样用户访问所有的路由，都会到这里进行处理
app.get('*', (req, res) => {
  const store = createStore();

  // 改方法返回将要渲染的组件 [{route:{loadData:[Function],path:'/users',component:[Object]}}]
  // matchRoutes(routes, req.path);

  const promises = matchRoutes(routes, req.path).map(({ route }) => {
    //如果组件中有loadData方法，则调用
    // 这里将store传递给loadData方法,保证使用的是一个store实例 loadData返回的是一个promise
    return route.loadData && route.loadData(store);
  });

  // 表明数据加载已经完成，store中已经获取到了请求的数据, 此时再进行数据响应，就能渲染出store中的数据
  Promise.all(promises).then(() => {
    res.send(renderer(req, store));
  });
});

app.listen(3000, () => {
  console.log('listening');
});
