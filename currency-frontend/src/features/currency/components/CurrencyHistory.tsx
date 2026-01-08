import { useAppSelector } from '../../../app/hooks';

export default function CurrencyHistory() {
  const { history } = useAppSelector((state) => state.currency);

  if (!history.length) return null;

  return (
    <div className="mt-3">
      <h6>Conversion History</h6>
      <ul className="list-group">
        {history.map((item, index) => (
          <li key={index} className="list-group-item">
            {item.amount} {item.from} → {item.result.toFixed(2)} {item.to} ({item.timestamp})
          </li>
        ))}
      </ul>
    </div>
  );
}
