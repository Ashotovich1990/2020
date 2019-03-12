import * as TweetsAPIUtil from '../util/tweets_api_util';

export const RECEIVE_TWEETS = "RECEIVE_TWEETS";

const receiveTweets = payload => ({
    type: RECEIVE_TWEETS,
    payload,
});

export const fetchTweets = tag => dispatch => (
    TweetsAPIUtil.fetchTweets(tag)
    .then(payload => dispatch(receiveTweets(payload)))
);