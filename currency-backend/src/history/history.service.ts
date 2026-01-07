import { Injectable } from '@nestjs/common';
import { HistoryRecord } from './interfaces/history-record.interface';
import { HistoryDto } from './dto/history.dto';

@Injectable()
export class HistoryService {
  private history: HistoryDto[] = [];

  add(record: HistoryDto){
    const newRecord: HistoryDto = {
      ...record,
      timestamp: new Date().toISOString(),
    };

    this.history.unshift(newRecord);
    return this.history;
  }

  getAll(): HistoryDto[] {
    return this.history;
  }
}
