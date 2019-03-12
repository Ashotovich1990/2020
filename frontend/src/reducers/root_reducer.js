import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import comments from './comments_reducer';

const RootReducer = combineReducers({
  session,
  errors,
  comments
});

export default RootReducer;