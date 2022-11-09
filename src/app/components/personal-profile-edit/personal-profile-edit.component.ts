import { UserImgUrlService } from 'src/app/services/user-img-url.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ConfigService } from 'src/app/services/config.service';
import { UploadService } from 'src/app/services/upload.service';
import { ToastService } from 'src/app/services/toast.service';
import { user } from 'src/app/interfaces/user.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-personal-profile-edit',
  templateUrl: './personal-profile-edit.component.html',
  styleUrls: ['./personal-profile-edit.component.scss']
})
export class PersonalProfileEditComponent implements OnInit {
  userForm: FormGroup = new FormGroup({
    nickName: new FormControl("", [Validators.required, Validators.minLength(2)]),
    avatar: new FormControl(""),
    sex: new FormControl("male", [Validators.required]),
  })
  @Input() set user(user: user) {
    this.userForm.patchValue({
      nickName: user?.nickName || "",
      sex: user?.sex || "male"
    })
  }
  @Input() set avatar(avatar: string) {
    this.userForm.patchValue({
      avatar: avatar || ""
    })
    this.imgUrl = avatar;
  }

  imgUrl = "";

  constructor(
    private userImgUrlService: UserImgUrlService,
    private configService: ConfigService,
    private uploadService: UploadService,
    private toastService: ToastService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.avatar = this.userImgUrlService.setUserImgUrl(this.configService.userImgUrl, this.configService.userProfile.sex)
  }


  onFileSelected(event: any) {
    if (event.target.files) {
      const file: File = event.target?.files[0];

      if (file) {
        const formData = new FormData();
        formData.append("avatar", file);

        this.uploadService.uploadImg(formData).subscribe({
          next: data => {
            this.imgUrl = data.imgUrl;
            this.userForm.patchValue({
              avatar: data.imgUrl,
            });
          },
          error: error => {
            this.toastService.setWarningToastMessage(error.error.message)
          }
        })
      }
    }
  }

  uploadUserProfile() {
    this.userService.patchUserProfile(this.userForm.value).subscribe({
      next: (data) => {
        this.imgUrl = this.userImgUrlService.setUserImgUrl(data.avatar, data.sex)
        this.userForm.setValue({
          nickName: data.nickName,
          sex: data.sex,
          avatar: this.imgUrl
        })
        this.toastService.setSuccessToastMessage("更新成功");
        this.configService.setUserProfile(data)
      },
      error: (error) => {
        this.toastService.setWarningToastMessage(error.error.message)
      }
    })
  }
}
