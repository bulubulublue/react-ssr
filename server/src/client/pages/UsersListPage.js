import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

const UsersList = ({ users }) => {
  // 由于服务端已经发送了该请求并且返回给了客户端，因而可以去除该浏览器端的请求，
  // 但是需要注意，对于服务器，只有当用户访问/users路由的时候，服务端才会发送请求获取数据
  useEffect(() => {
    // 只有当服务端没有数据的时候，才发送请求
    if(!users.length){
      fetchUsers();
    }
  }, []);

  const renderUsers = () => users.map(user => <li key={user.id}>{user.name}</li>);
  return (
    <div>
      <h1>User List:</h1>
      <ul>{renderUsers()}</ul>
    </div>
  );
};

function mapStateToProps(state) {
  return { users: state.users };
}

// 用于发送请求获取数据的方法
export function loadData(store) {
  // console.log(store.dispatch(fetchUsers())); // 这个方法将返回一个promise

  return { res: store.dispatch(fetchUsers()) };
}

export default connect(mapStateToProps, { fetchUsers })(UsersList);
