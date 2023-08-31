import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({ auth }) => {
  // console.log('here is auth', auth);
  const authButton = auth ? <a href="/api/logout">Logout</a> : <a href="/api/auth/google">Login</a>;

  return (
    <div>
      <Link to="/">Home</Link>&nbsp;
      <Link to="/users">Users</Link>&nbsp;
      <Link to="/admins">Admins</Link>&nbsp;
      {authButton}
    </div>
  );
};

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(Header);
