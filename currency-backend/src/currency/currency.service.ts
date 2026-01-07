import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Freecurrencyapi from '@everapi/freecurrencyapi-js';
import { ConvertDto } from './dto/convert.dto';

@Injectable()
export class CurrencyService {
  private freecurrencyapi: Freecurrencyapi;

  constructor(private configService: ConfigService) {
    this.freecurrencyapi = new Freecurrencyapi(
      this.configService.get<string>('CURRENCY_API_KEY'),
    );
  }

  async getCurrencies() {
    const response = await this.freecurrencyapi.currencies();
    return response.data;
  }

  async convert(dto: ConvertDto) {
    const { from, to, amount, date } = dto;

    let rate: number;

    if (date) {
      const response = await this.freecurrencyapi.historical({
        date,
        base_currency: from,
        currencies: to,
      });

      console.log('response: ==>>', response);
      rate = response.data[date][to];
    } else {
      const response = await this.freecurrencyapi.latest({
        base_currency: from,
        currencies: to,
      });

      rate = response.data[to];
    }

    return {
      from,
      to,
      amount,
      rate,
      result: amount * rate,
      date: date || new Date().toISOString(),
    };
  }
}
