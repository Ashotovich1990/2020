import { connect } from 'react-redux';
import { fetchTweets} from '../../actions/tweets_actions';
import { receiveSearch } from '../../actions/search_actions';
import Browse from './browse';

const mapStateToProps = state => ({
    searchTerm: state.search,
    sentiment: state.entities.sentiments
})

const mapDispatchToProps = dispatch => ({
  receiveSearch: (tag) => dispatch(receiveSearch(tag)),
  fetchTweets: (tag) => dispatch(fetchTweets(tag)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Browse);