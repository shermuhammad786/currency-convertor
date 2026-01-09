export interface ConvertDto {
  from: string;
  to: string;
  amount: number;
  date?: string;
}

export interface CurrencyResult {
  from: string;
  to: string;
  amount: number;
  rate: number;
  result: number;
  date: string;
}
