import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import TextInput from './TextInput';
import * as loginActions from '../../../actions/loginActions';

class LoginForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      user: {}
    };

    this.login = this.login.bind(this);
    this.updateUserState = this.updateUserState.bind(this);
  }

  updateUserState(event) {
    console.log(this);
    const field = event.target.name;
    let user = this.state.user;
    user[field] = event.target.value;
    return this.setState({user: user});
  }

  login(event) {
    event.preventDefault();
    console.log(event);
    this.props.actions.login(this.state.user)
    console.log(this.state.user)
  }

  render() {
    return (
      <form>
        <TextInput 
          name="username"
          label="username"
          placeholder="user name"
          onChange={this.updateUserState}
          error="placeholder"/>

        <TextInput 
          name="password"
          label="password"
          placeholder="password"
          onChange={this.updateUserState}
          error="placeholder"/>

        <input
          type="submit"
          onClick={this.login} />
      </form>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(loginActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
