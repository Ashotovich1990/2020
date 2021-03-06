import { getComments, getUserComments, writeComment } from '../util/comment_api_util';

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_USER_COMMENTS = "RECEIVE_USER_COMMENTS";
export const RECEIVE_NEW_COMMENT = "RECEIVE_NEW_COMMENT";

export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const receiveUserComments = comments => ({
  type: RECEIVE_USER_COMMENTS,
  comments
});

export const receiveNewComment = comment => ({
  type: RECEIVE_NEW_COMMENT,
  comment
});

export const fetchComments = () => dispatch => (
  getComments()
    .then(comments => dispatch(receiveComments(comments)))
    .catch(err => console.log(err))
);

export const fetchUserComments = (id) => dispatch => (
  getUserComments(id)
    .then(comments => dispatch(receiveUserComments(comments)))
    .catch(err => console.log(err))
);

export const composeComment = (data) => dispatch => (
  writeComment(data)
    .then(comment => dispatch(receiveNewComment(comment)))
    .catch(err => console.log(err))
);