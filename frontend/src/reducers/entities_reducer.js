import { combineReducers } from 'redux';
import tweets from './tweets_reducer';
import sentiments from './sentiments_reducer';

const entitiesReducer = combineReducers({
    tweets,
    sentiments,
});
  
  export default entitiesReducer;