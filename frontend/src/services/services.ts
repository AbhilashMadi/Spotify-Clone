import axios from 'axios';

export function axiosGet(url: string) {
  return axios.get(url);
}