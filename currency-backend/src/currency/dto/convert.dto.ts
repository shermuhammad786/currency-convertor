import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class ConvertDto {
  @ApiProperty({
    description: 'Base currency code from which the amount will be converted',
    example: 'USD',
    default: 'USD',
  })
  from: string;

  @ApiProperty({
    description: 'Target currency code to which the amount will be converted',
    example: 'PKR',
    default: 'PKR',
  })
  to: string;

  @ApiProperty({
    description: 'Amount to convert from the base currency',
    example: 10,
    default: 10,
  })
  amount: number;

  @ApiPropertyOptional({
    description: 'Optional historical date (YYYY-MM-DD) to use exchange rate from past',
    example: '2023-10-10',
    default: '2023-10-10',
  })
  date?: string;
}
