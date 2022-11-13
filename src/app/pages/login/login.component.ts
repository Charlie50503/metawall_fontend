import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToastService } from 'src/app/services/toast.service';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit,OnDestroy {
  isSignInPage = true;
  isLoading = false;

  subscription = new Subscription;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toastService: ToastService
  ) { }

  ngOnInit(): void {
    this.subscription = this.router.events.pipe(filter(event => event instanceof NavigationStart))
      .subscribe((event) => {
        console.log("2222");
        const toastMessage = this.route.snapshot.queryParamMap.get("toastMessage")
        const status = this.route.snapshot.queryParamMap.get("status")
        console.log(toastMessage, status);

        if (toastMessage && status) {
          this.showToastMessage(status, toastMessage)
        }
        // You only receive NavigationStart events
      });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe()
  }

  showToastMessage(status: string, message: string) {
    setTimeout(() => { // TODO 這個時機點需要優化，應該有更好的解法
      if (status === "success") {
        this.toastService.setSuccessToastMessage(message);
      } else {
        this.toastService.setWarningToastMessage(message);
      }
    }, 0)
  }
  isSignUp() {
    this.isSignInPage = false;
  }

  isSignIn() {
    this.isSignInPage = true;
  }

  onLoading(value: boolean) {
    this.isLoading = value;
  }
}
