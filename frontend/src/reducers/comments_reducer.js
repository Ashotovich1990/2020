import { RECEIVE_COMMENTS, RECEIVE_USER_COMMENTS, RECEIVE_NEW_COMMENT } from '../actions/comment_actions';

const CommentsReducer = (state={ all: {}, user: {}, new: undefined }, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_COMMENTS:
      newState.all = action.tweets.data;
      return newState;
    case RECEIVE_USER_COMMENTS:
      newState.user = action.tweets.data;
      return newState;
    case RECEIVE_NEW_COMMENT:
      newState.new = action.tweet.data;
      return newState;
    default:
      return state;
  }
};

export default CommentsReducer;