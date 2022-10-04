import { WarningToastService } from './../../services/warning-toast.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
declare var bootstrap : any ;
@Component({
  selector: 'app-warning-toast',
  templateUrl: './warning-toast.component.html',
  styleUrls: ['./warning-toast.component.scss']
})
export class WarningToastComponent implements OnInit {
  warningMessage = ""

  subscription = new Subscription;
  constructor(
    private warningToastService: WarningToastService
  ) { }

  ngOnInit(): void {
    this.subscription = this.warningToastService.warningToastMessageChanged.subscribe(warningMessage=>{
      this.warningMessage = warningMessage
      this.showWarningToastMessage()
    })
  }

  showWarningToastMessage() {
    const warningToastEl = document.getElementById('WARNING_TOAST')
    const warningToast = bootstrap.Toast.getOrCreateInstance(warningToastEl) // Returns a Bootstrap toast instance
    warningToast.show()
  }
}
