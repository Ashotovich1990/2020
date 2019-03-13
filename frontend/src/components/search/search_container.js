import { connect } from 'react-redux';
import { fetchTweets} from '../../actions/tweets_actions';
import { receiveSearch } from '../../actions/search_actions';
import Search from './search';

const mapStateToProps = state => ({
  candidates: state.entities.candidates,
});

const mapDispatchToProps = dispatch => ({
  receiveSearch: (tag) => dispatch(receiveSearch(tag)),
  fetchTweets: (tag) => dispatch(fetchTweets(tag)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Search);