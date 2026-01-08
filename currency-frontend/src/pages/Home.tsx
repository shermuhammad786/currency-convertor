import MobileLayout from '../layouts/MobileLayout';
import CurrencyForm from '../features/currency/components/CurrencyForm';
import CurrencyResult from '../features/currency/components/CurrencyResult';
import CurrencyHistory from '../features/currency/components/CurrencyHistory';

export default function Home() {
  return (
    <MobileLayout>
      <h5 className="text-center mb-3">Currency Converter</h5>
      <CurrencyForm />
      <CurrencyResult />
      <CurrencyHistory />
    </MobileLayout>
  );
}
