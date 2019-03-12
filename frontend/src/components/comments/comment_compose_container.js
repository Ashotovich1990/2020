import {connect} from 'react-redux';
import {composeComment} from '../../actions/comment_actions';
import CommentCompose from './comment_compose';

const msp = state => {
  return {
    currentUser: state.session.user,
    newComment: state.comments.new
  };
};

const mdp = dispatch => {
  return {
    composeComment: data => dispatch(composeComment(data))
  };
};


export default connect(msp, mdp)(CommentCompose);