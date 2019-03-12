import {RECEIVE_TWEETS} from '../actions/tweets_actions';

const sentimentsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_TWEETS:
         return action.payload.data.sentiment
        default:
         return state;
    }
}

export default sentimentsReducer;