// const express = require('express');
// const renderToString = require('react-dom/server').renderToString;
// const React = require('react');
// const Home = require('./client/components/Home').default;

import express from 'express'
import renderer from './helpers/renderer'
import createStore from './helpers/createStore'
import 'babel-polyfill' //当代码中使用到async时，默认需要配置runtime-generator(实际没有配置也能运行)

const app = express()
app.use(express.static('public')) // <- 通过这样配置，会自动在bundle.js前自动添加 public/

//这里使用了jsx语法，node环境无法识别，所以需要babel进行编译
// 将路由该为*，这样用户访问所有的路由，都会到这里进行处理
app.get('*', (req, res) => {
  const store = createStore()
  res.send(renderer(req, store))
})

app.listen(3000, () => {
  console.log('listening')
})
