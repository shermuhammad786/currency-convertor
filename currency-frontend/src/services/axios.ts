import axios from 'axios';

export const api = axios.create({
  // baseURL: import.meta.env.VITE_API_BASE_URL,
  baseURL: 'https://currency-convertor-theta-self.vercel.app/',
});
