import {RECEIVE_TWEETS} from '../actions/tweets_actions';
import {RECEIVE_SEARCH} from '../actions/search_actions';

const sentimentsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_TWEETS:
         return action.payload.data.sentiment;
        case RECEIVE_SEARCH:
          return {};
        default:
         return state;
    }
}

export default sentimentsReducer;