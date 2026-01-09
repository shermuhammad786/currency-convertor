import { useAppSelector } from '../../../app/hooks';

export default function CurrencyResult() {
  const { result } = useAppSelector((state) => state.currency);

  if (!result) return null;
  const newDate = new Date(result.date)
  const date = newDate.toLocaleString()
  console.log('date: ', date);

  return (
    <div className="alert alert-success mt-2">
      {result.amount} {result.from} = {result.result.toFixed(2)} {result.to} <br />
      Rate: {result.rate} <br />
      {date}
    </div>
  );
}
