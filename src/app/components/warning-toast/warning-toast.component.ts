import { ToastService } from '../../services/toast.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
declare var bootstrap : any ;
@Component({
  selector: 'app-warning-toast',
  templateUrl: './warning-toast.component.html',
  styleUrls: ['./warning-toast.component.scss']
})
export class WarningToastComponent implements OnInit,OnDestroy {
  warningMessage = ""

  subscription = new Subscription;
  constructor(
    private toastService: ToastService
  ) { }

  ngOnInit(): void {
    this.subscription = this.toastService.warningToastMessageChanged.subscribe(warningMessage=>{
      this.warningMessage = warningMessage
      this.showWarningToastMessage()
    })
  }

  showWarningToastMessage() {
    const warningToastEl = document.getElementById('WARNING_TOAST')
    const warningToast = bootstrap.Toast.getOrCreateInstance(warningToastEl) // Returns a Bootstrap toast instance
    warningToast.show()
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe()
  }
}
