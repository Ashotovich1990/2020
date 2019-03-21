import { RECEIVE_SEARCH } from '../actions/search_actions';
import { RECEIVE_USER_LOGOUT } from '../actions/session_actions';

const searchReducer = (state = "", action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SEARCH:
         return action.tag
        case RECEIVE_USER_LOGOUT:
          return "";
        default:
         return state;
    }
}

export default searchReducer;