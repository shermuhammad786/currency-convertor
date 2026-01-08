import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { ConvertDto } from './dto/convert.dto';

@Injectable()
export class CurrencyService {
  private baseUrl : string | undefined 
  private apiKey: string | undefined;

  constructor(private configService: ConfigService) {
    this.baseUrl = this.configService.get<string>('CURRENCY_API_URL')
    this.apiKey = this.configService.get<string>('CURRENCY_API_KEY');
  }

  async getCurrencies() {
    const res = await axios.get(`${this.baseUrl}/currencies`, {
      params: { apikey: this.apiKey },
    });
    return res.data.data;
  }

  async convert(dto: ConvertDto) {
    const { from, to, amount, date } = dto;

    const endpoint = date ? 'historical' : 'latest';

    const res = await axios.get(`${this.baseUrl}/${endpoint}`, {
      params: {
        apikey: this.apiKey,
        base_currency: from,
        currencies: to,
        ...(date && { date }),
      },
    });

    const rate = date
      ? res.data.data[date][to]
      : res.data.data[to];

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



// import { Injectable } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';
// import Freecurrencyapi from '@everapi/freecurrencyapi-js';
// import { ConvertDto } from './dto/convert.dto';

// @Injectable()
// export class CurrencyService {
//   private freecurrencyapi: Freecurrencyapi;

//   constructor(private configService: ConfigService) {
//     this.freecurrencyapi = new Freecurrencyapi(
//       this.configService.get<string>('CURRENCY_API_KEY'),
//     );
//   }

//   async getCurrencies() {
//     const response = await this.freecurrencyapi.currencies();
//     return response.data;
//   }

//   async convert(dto: ConvertDto) {
//     const { from, to, amount, date } = dto;

//     let rate: number;

//     if (date) {
//       const response = await this.freecurrencyapi.historical({
//         date,
//         base_currency: from,
//         currencies: to,
//       });

//       console.log('response: ==>>', response);
//       rate = response.data[date][to];
//     } else {
//       const response = await this.freecurrencyapi.latest({
//         base_currency: from,
//         currencies: to,
//       });

//       rate = response.data[to];
//     }

//     return {
//       from,
//       to,
//       amount,
//       rate,
//       result: amount * rate,
//       date: date || new Date().toISOString(),
//     };
//   }
// }
