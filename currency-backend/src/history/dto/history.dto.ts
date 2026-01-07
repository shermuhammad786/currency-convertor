import { ApiProperty } from '@nestjs/swagger';

export class HistoryDto {
  @ApiProperty({
    description: 'Base currency from which the conversion is made',
    example: 'USD',
    default: 'USD',
  })
  from: string;

  @ApiProperty({
    description: 'Target currency to which the amount is converted',
    example: 'INR',
    default: 'INR',
  })
  to: string;

  @ApiProperty({
    description: 'Amount to be converted from base currency',
    example: 10,
    default: 10,
  })
  amount: number;

  @ApiProperty({
    description: 'Exchange rate used for the conversion',
    example: 278.5,
    default: 278.5,
  })
  rate: number;

  @ApiProperty({
    description: 'Final converted amount after applying the exchange rate',
    example: 2785,
    default: 2785,
  })
  result: number;

  @ApiProperty({
    description: 'Date and time when the conversion was performed (ISO format)',
    example: '2026-01-07T10:30:00.000Z',
    default: new Date().toISOString(),
  })
  timestamp: string;
}
