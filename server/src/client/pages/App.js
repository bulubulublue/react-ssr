import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import { fetchCurrentUser } from '../actions';

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

// 用于发送请求获取数据的方法
export function loadData(store) {
  return { res: store.dispatch(fetchCurrentUser()) };
}

export default App;
