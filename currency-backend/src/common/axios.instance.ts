import axios from 'axios';

export const currencyAxios = axios.create({
  baseURL: process.env.CURRENCY_API_URL,
  params: {
    apikey: process.env.CURRENCY_API_KEY,
  },
});
