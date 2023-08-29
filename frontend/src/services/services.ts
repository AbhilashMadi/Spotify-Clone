import axios from 'axios';

// https://qtify-backend-labs.crio.do/albums/top
// https://qtify-backend-labs.crio.do/albums/new
// https://qtify-backend-labs.crio.do/album/:slug
// https://qtify-backend-labs.crio.do/songs
// https://qtify-backend-labs.crio.do/genres

//creating an axios instence with base url
export const axiosInstence = axios.create({
  baseURL: import.meta.env.VITE_APP_QTIFY_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export function axiosGet(url: string) {
  return axios.get(url);
}