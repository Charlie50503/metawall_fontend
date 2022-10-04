import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WarningToastService {
  warningToastMessageChanged = new Subject<string>();

  warningToastMessage = "";
  constructor() { }

  setWarningToastMessage(message:string){
    this.warningToastMessage = message
    this.warningToastMessageChanged.next(this.warningToastMessage)
  }
}
