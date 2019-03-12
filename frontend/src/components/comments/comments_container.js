import { connect } from 'react-redux';
import { fetchComments } from '../../actions/comment_actions';
import Comments from './comments';

const msp = state => {
  return {
    comments: Object.values(state.comments.all)
  };
};

const mdp = dispatch => {
  return {
    fetchComments: () => dispatch(fetchComments())
  };
};

export default connect (msp, mdp)(Comments);