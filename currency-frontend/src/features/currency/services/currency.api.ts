import axios from 'axios';
import { api } from '../../../services/axios';
import type { ConvertDto } from '../currency.types';

export const convertCurrency = async(payload: ConvertDto) =>
 await axios.post('https://currency-convertor-backend-110.vercel.app/currency/convert', payload);

export const getHistory = () => api.get('/history');
