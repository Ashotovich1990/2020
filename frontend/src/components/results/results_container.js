import { connect } from 'react-redux';
import { fetchComments } from '../../actions/comment_actions';
import Results from './results';

const mapStateToProps = state => {
  
  return {
    comments: Object.values(state.comments.all),
    sentiments: state.entities.sentiments,
    search: state.search,
    tweets: state.entities.tweets,
    emotions: state.entities.emotions.emotion
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchComments: () => dispatch(fetchComments())
  };
};


export default connect (mapStateToProps, mapDispatchToProps)(Results);