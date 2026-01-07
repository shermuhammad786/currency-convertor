import { Controller, Get, Post, Body } from '@nestjs/common';
import { HistoryService } from './history.service';
import { HistoryDto } from './dto/history.dto';

@Controller('history')
export class HistoryController {
  constructor(private readonly service: HistoryService) {}

  @Post()
  add(@Body() record: HistoryDto) {
    return this.service.add(record);
  }

  @Get()
  getAll() {
    return this.service.getAll();
  }
}
