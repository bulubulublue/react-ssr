const express = require('express');
const app = express();
const renderToString = require('react-dom/server').renderToString;
const React = require('react');
const Home = require('./client/components/Home').default;

//这里使用了jsx语法，node环境无法识别，所以需要babel进行编译
app.get('/', (req, res) => {
  const content = renderToString(<Home />);
  res.send(content);
});

app.listen(3000, () => {
  console.log('listening');
});
