// 客户端项目入口
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'

const root = ReactDOM.hydrateRoot(
  document.getElementById('root'),
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
)
