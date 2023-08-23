const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')

const ServerApp = require('../../dist/ServerApp').default // 需要添加.default,不然会报错
const ReactDomServer = require('react-dom/server')

const AppString = ReactDomServer.renderToString(ServerApp)

// 将string插入到打包后的index.html文件的root中
//直接获取dist目录下的html，这样可以包括引入的bundle.js文件
const htmlTemplate = fs.readFileSync(
  path.join(__dirname, '../../dist/index.html'),
  'utf8'
)

const newHtml = htmlTemplate.replace('<!-- app -->', AppString)

app.use('/public', express.static(path.join(__dirname, '../../dist')))

app.get('/', (req, res) => {
  res.send(newHtml)
})

const port = process.env.PORT || 5000
app.listen(port, () => console.log('server started'))
