import React from 'react';
import {Link} from 'react-router';
import LoginForm from '../common/loginForm/LoginForm';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h1>1</h1>
        <p>RRE</p>
        <Link to="about">About Page</Link>
        <LoginForm />
      </div>
    );
  }
}

export default HomePage;
