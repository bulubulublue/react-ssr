// const express = require('express');
// const renderToString = require('react-dom/server').renderToString;
// const React = require('react');
// const Home = require('./client/components/Home').default;

import express from 'express'
import renderer from './helpers/renderer'

const app = express()
app.use(express.static('public')) // <- 通过这样配置，会自动在bundle.js前自动添加 public/

//这里使用了jsx语法，node环境无法识别，所以需要babel进行编译
app.get('/', (req, res) => {
  res.send(renderer())
})

app.listen(3000, () => {
  console.log('listening')
})
