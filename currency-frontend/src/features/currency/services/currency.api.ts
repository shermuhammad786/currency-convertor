import { api } from '../../../services/axios';
import type { ConvertDto } from '../currency.types';

export const convertCurrency = (payload: ConvertDto) =>
  api.post('/currency/convert', payload);

export const getHistory = () => api.get('/history');
