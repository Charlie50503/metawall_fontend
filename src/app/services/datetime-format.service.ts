import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatetimeFormatService {
  constructor(
    private datePipe: DatePipe
  ) { }

  datetimeFormat(datetimeStr: string, format: string) {
    return this.datePipe.transform(datetimeStr, format);
  }

  getDateDifference(Date1: Date, Date2: Date) { // date object 日期格式
    let milliseconds_Time = Date2.getTime() - Date1.getTime();
    return milliseconds_Time / (1000 * 3600 * 24);
  };
}
