import {combineReducers} from 'redux';
import user from './loginReducer';
//import objectTwo from './objectTwoReducer';

const rootReducer = combineReducers({
  user
  //objectTwo
});

export default rootReducer;
