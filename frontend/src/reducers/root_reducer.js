import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import comments from './comments_reducer';
import entities from './entities_reducer'
import search from './search_reducer'

const RootReducer = combineReducers({
  entities,
  session,
  errors,
  comments,
  search,
});

export default RootReducer;