import { connect } from 'react-redux';
import { fetchComments } from '../../actions/comment_actions';
import Comments from './comments';

const mapStateToProps = state => {
 
  return {
    comments: state.comments.all,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchComments: () => dispatch(fetchComments())
  };
};

export default connect (mapStateToProps, mapDispatchToProps)(Comments);