import { combineReducers } from 'redux';
import tweets from './tweets_reducer';
import sentiments from './sentiments_reducer';
import emotions from './emotions_reducer';

const entitiesReducer = combineReducers({
    tweets,
    sentiments,
    emotions,
});
  
  export default entitiesReducer;