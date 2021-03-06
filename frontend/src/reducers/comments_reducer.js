import { RECEIVE_COMMENTS, RECEIVE_USER_COMMENTS, RECEIVE_NEW_COMMENT } from '../actions/comment_actions';
import {merge} from 'lodash';

const CommentsReducer = (state={ all: [], user: {}, new: undefined }, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_COMMENTS:
      newState.all = action.comments.data;
      return newState;
    case RECEIVE_USER_COMMENTS:
      newState.user = action.comments.data;
      return newState;
    case RECEIVE_NEW_COMMENT:
      newState.all.unshift(action.comment.data);
      return newState;
    default:
      return state;
  }
};

export default CommentsReducer;