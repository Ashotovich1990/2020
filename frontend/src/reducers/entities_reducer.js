import { combineReducers } from 'redux';
import tweets from './tweets_reducer';
import sentiments from './sentiments_reducer';
import candidates from './candidates_reducer';

const entitiesReducer = combineReducers({
    tweets,
    sentiments,
    candidates,
});
  
  export default entitiesReducer;