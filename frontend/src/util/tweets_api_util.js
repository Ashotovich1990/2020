import axios from 'axios';

export const fetchTweets = tag => {
  return axios.get(`/api/tweets/all?tag=${tag}`);
};