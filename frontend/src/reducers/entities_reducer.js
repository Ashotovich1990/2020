import { combineReducers } from 'redux';
import tweets from './tweets_reducer';
import sentiments from './sentiments_reducer';
<<<<<<< HEAD
import emotions from './emotions_reducer';
=======
import candidates from './candidates_reducer';
>>>>>>> eb1a51c0c9cafae19f16fd40fe19ae4907394d0e

const entitiesReducer = combineReducers({
    tweets,
    sentiments,
<<<<<<< HEAD
    emotions,
=======
    candidates,
>>>>>>> eb1a51c0c9cafae19f16fd40fe19ae4907394d0e
});
  
  export default entitiesReducer;