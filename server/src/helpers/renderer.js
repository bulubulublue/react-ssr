import React from 'react'
import { renderToString } from 'react-dom/server'
import Home from '../client/components/Home'

export default () => {
  const content = renderToString(<Home />)

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
