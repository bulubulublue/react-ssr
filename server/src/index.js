// const express = require('express');
// const renderToString = require('react-dom/server').renderToString;
// const React = require('react');
// const Home = require('./client/components/Home').default;

import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from './client/components/Home';

const app = express();
app.use(express.static('public')); // <- 通过这样配置，会自动在bundle.js前自动添加 public/

//这里使用了jsx语法，node环境无法识别，所以需要babel进行编译
app.get('/', (req, res) => {
  const content = renderToString(<Home />);

  // <- 加载打包后的浏览器端js文件
  // 添加id为root的div
  const html = ` 
  <html>
    <head></head>
    <body>
      <div id="root">${content}</div>
      <script src="bundle.js"></script>
    </body>
  </html>
  `;
  res.send(html);
});

app.listen(3000, () => {
  console.log('listening');
});
