import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import TextInput from './TextInput';
import * as loginActions from '../../../actions/loginActions';

class LoginForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      user: Object.assign({}, this.props.user)
    };

    this.login = this.login.bind(this);
    this.updateUserState = this.updateUserState.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.user != nextProps.user) {
      this.setState({user: Object.assign({}, nextProps.user)});
    }
  }

  //sets the form state to ship out in the login function
  updateUserState(event) {
    const field = event.target.name;
    let user = this.state.user;
    user[field] = event.target.value;
    return this.setState({user: user});
  }

  //calls the action using the state set as the input fields change
  login(event) {
    event.preventDefault();
    this.props.actions.login(this.state.user)
  }

  render() {
    console.log(this.state)
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
          onClick={this.login}/>
      </form>
    );
  }
}

function mapStateToProps(state, ownProps) {
  console.log(state);
  return {
    user: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(loginActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
