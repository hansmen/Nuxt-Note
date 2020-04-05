import axios from 'axios';

const baseDomain = process.env.BASE_API;
const baseURL = baseDomain + '/';

export default axios.create({
  timeout: 10000,
  baseURL,
  headers: {
    common: {
      Authorization: localStorage.getItem('auth._token.local'),
    },
  },
});
