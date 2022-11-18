import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const signup = async signupData => {
  const { data } = await instance.post('/users/signup', signupData);
  console.log('data: ', data);
  return data;
};
