import { Controller, Get, Post, Body } from '@nestjs/common';
import { CurrencyService } from './currency.service';
import { ConvertDto } from './dto/convert.dto';

@Controller('currency')
export class CurrencyController {
  constructor(private readonly service: CurrencyService) {}

  @Get('list')
  getCurrencies() {
    return this.service.getCurrencies();
  }

  @Post('convert')
  convert(@Body() dto: ConvertDto) {
    return this.service.convert(dto);
  }
}
