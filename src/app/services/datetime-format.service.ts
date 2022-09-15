import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatetimeFormatService {
  constructor(
    private datePipe:DatePipe
  ) { }

  datetimeFormat(datetimeStr: string, format: string) {
    return this.datePipe.transform(datetimeStr, format);
  }
}
