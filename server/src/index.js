import express from 'express';
import renderer from './helpers/renderer';
import 'babel-polyfill'; //当代码中使用到async时，默认需要配置runtime-generator(实际没有配置也能运行)
import { createStaticHandler } from 'react-router-dom/server';
import routes, { store } from './client/Routes';
import createFetchRequest from './helpers/request';

const app = express();
app.use(express.static('public')); // <- 通过这样配置，会自动在bundle.js前自动添加 public/
let handler = createStaticHandler(routes);

//这里使用了jsx语法，node环境无法识别，所以需要babel进行编译
// 将路由该为*，这样用户访问所有的路由，都会到这里进行处理
app.get('*', async (req, res) => {
  let fetchRequest = createFetchRequest(req);
  // console.log(fetchRequest);
  let context = await handler.query(fetchRequest);

  context.loaderData['1'].res.then(() => {
    res.send(renderer(req, store, handler, context));
  });
});

app.listen(3002, () => {
  console.log('listening');
});
