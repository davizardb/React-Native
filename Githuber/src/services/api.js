import {create} from 'apisauce';

const api = create({
  baseURL: 'https://api.github.com',
  headers: {
    Aceept: 'application/vnd.github.v3+json',
    'User-Agent': 'Githuber',
  },
});

export default api;
