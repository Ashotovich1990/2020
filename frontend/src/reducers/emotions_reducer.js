import {RECEIVE_TWEETS} from '../actions/tweets_actions';

const emotionsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_TWEETS:
         return action.payload.data.emotion;
        default:
         return state;
    }
}

export default emotionsReducer;