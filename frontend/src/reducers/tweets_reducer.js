import {RECEIVE_TWEETS} from '../actions/tweets_actions';

const tweetsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_TWEETS:
         return action.payload.data.tweets
        default:
         return state;
    }
}

export default tweetsReducer;