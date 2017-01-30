import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h1>React Redux Environment</h1>
        <p>React, Redux, ES6</p>
        <Link to="about">About Page</Link>
      </div>
    );
  }
}

export default HomePage;
