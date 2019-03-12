import axios from 'axios';

export const getComments = () => {
  return axios.get('/api/comments')
};

export const getUserComments = id => {
  return axios.get(`/api/comments/user/${id}`)
};

export const writeComment = data => {
  return axios.post('/api/comments/', data)
};