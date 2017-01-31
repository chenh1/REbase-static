import {combineReducers} from 'redux';
import login from './loginReducer';
//import objectTwo from './objectTwoReducer';

const rootReducer = combineReducers({
  login
  //objectTwo
});

export default rootReducer;
