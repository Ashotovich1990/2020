import { combineReducers } from 'redux';
import tweets from './tweets_reducer';
import sentiments from './sentiments_reducer';
import emotions from './emotions_reducer';
import candidates from './candidates_reducer';

const entitiesReducer = combineReducers({
    tweets,
    sentiments,
    emotions,
    candidates,
});
  
  export default entitiesReducer;