import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  warningToastMessageChanged = new Subject<string>();
  successToastMessageChanged = new Subject<string>();

  warningToastMessage = "";
  successToastMessage = "";
  constructor() { }

  setWarningToastMessage(message:string){
    this.warningToastMessage = message
    this.warningToastMessageChanged.next(this.warningToastMessage)
  }

  setSuccessToastMessage(message:string){
    this.successToastMessage = message
    this.successToastMessageChanged.next(this.successToastMessage)
  }
}
