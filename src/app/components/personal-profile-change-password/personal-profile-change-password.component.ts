import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { passwordForm } from 'src/app/interfaces/password.interface';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-personal-profile-change-password',
  templateUrl: './personal-profile-change-password.component.html',
  styleUrls: ['./personal-profile-change-password.component.scss']
})
export class PersonalProfileChangePasswordComponent implements OnInit {
  passwordForm: FormGroup = new FormGroup({
    password: new FormControl("", [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl("", [Validators.required, Validators.minLength(8)])
  })
  constructor(
    private userService: UserService,
    private toastService: ToastService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  uploadPassword() {
    console.log("upload password");

    this.userService.patchUploadPassword(this.passwordForm.value).subscribe({
      next: (data) => {
        localStorage.removeItem("metawall-token");
        this.toastService.setSuccessToastMessage(data.message);
        this.router.navigate(["/login"])
      },
      error: (error) => {
        this.toastService.setWarningToastMessage(error.error.message);
      }
    })
  }

}
