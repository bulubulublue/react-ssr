// 客户端项目入口
import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/Home';

const root = ReactDOM.hydrateRoot(document.getElementById('root'), <Home />);
