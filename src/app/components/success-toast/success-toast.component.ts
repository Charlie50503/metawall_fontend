import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ToastService } from 'src/app/services/toast.service';
declare var bootstrap: any;

@Component({
  selector: 'app-success-toast',
  templateUrl: './success-toast.component.html',
  styleUrls: ['./success-toast.component.scss']
})
export class SuccessToastComponent implements OnInit {
  successMessage = ""

  subscription = new Subscription;
  constructor(
    private toastService: ToastService
  ) { }

  ngOnInit(): void {
    this.subscription = this.toastService.successToastMessageChanged.subscribe(successMessage => {
      this.successMessage = successMessage
      this.showWarningToastMessage()
    })
  }

  showWarningToastMessage() {
    const successToastEl = document.getElementById('SUCCESS_TOAST')
    const successToast = bootstrap.Toast.getOrCreateInstance(successToastEl) // Returns a Bootstrap toast instance
    successToast.show()
  }


  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe()
  }
}
