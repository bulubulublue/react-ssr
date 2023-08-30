import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

const UsersList = ({ users, fetchUsers }) => {
  useEffect(() => {
    fetchUsers();
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
  console.log('data loading');
  // console.log(store.dispatch(fetchUsers())); // 这个方法将返回一个promise

  // return store.dispatch(fetchUsers());
  return { res: store.dispatch(fetchUsers()) };
}

export default connect(mapStateToProps, { fetchUsers })(UsersList);
