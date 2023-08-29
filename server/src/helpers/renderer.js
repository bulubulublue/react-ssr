import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import Routes from '../client/Routes'

// 这里的req参数就是在index.js中定义接口时，用户的请求参数
// 因为服务器不能从浏览器的地址栏直接获取当前url，所以需要从请求参数中获取
export default (req) => {
  const content = renderToString(
    <StaticRouter location={req.path} context={{}}>
      <Routes />
    </StaticRouter>
  )

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
  `

  return html
}
