import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { startLoading, setResult } from '../currency.slice';
import { convertCurrency } from '../services/currency.api';
import Loader from '../../ui/Loader';
import { api } from '../../../services/axios';

type Currency = {
  code: string;
  name: string;
  symbol: string;
  symbol_native: string;
  decimal_digits: number;
};

export default function CurrencyForm() {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.currency);

  const [currencies, setCurrencies] = useState<Record<string, Currency>>({});
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('EUR');
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    const loadCurrencies = async () => {
      const res = await api.get('/currency/list');
      setCurrencies(res.data);
    };
    loadCurrencies();
  }, []);

  const handleConvert = async () => {
    dispatch(startLoading());
    try {
      const res = await convertCurrency({ from, to, amount });
      dispatch(setResult(res.data));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      {/* Amount */}
      <input
        type="number"
        className="form-control mb-2"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />

      {/* From Currency */}
      <select
        className="form-control mb-2"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
      >
        {Object.values(currencies).map((cur) => (
          <option key={cur.code} value={cur.code}>
            {cur.code} - {cur.name}
          </option>
        ))}
      </select>

      {/* To Currency */}
      <select
        className="form-control mb-2"
        value={to}
        onChange={(e) => setTo(e.target.value)}
      >
        {Object.values(currencies).map((cur) => (
          <option key={cur.code} value={cur.code}>
            {cur.code} - {cur.name}
          </option>
        ))}
      </select>

      <button className="btn btn-primary w-100" onClick={handleConvert}>
        Convert
      </button>

      {loading && <Loader />}
    </div>
  );
}
