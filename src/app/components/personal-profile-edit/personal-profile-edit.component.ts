import { UserImgUrlService } from 'src/app/services/user-img-url.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ConfigService } from 'src/app/services/config.service';
import { UploadService } from 'src/app/services/upload.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-personal-profile-edit',
  templateUrl: './personal-profile-edit.component.html',
  styleUrls: ['./personal-profile-edit.component.scss']
})
export class PersonalProfileEditComponent implements OnInit {
  userForm: FormGroup = new FormGroup({
    nickName: new FormControl(""),
    avatar: new FormControl(""),
    sex: new FormControl("male"),
  })

  avatar: string = "";
  constructor(
    private userImgUrlService: UserImgUrlService,
    private configService: ConfigService,
    private uploadService: UploadService,
    private toastService: ToastService
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
            this.avatar = data.imgUrl
            this.userForm.patchValue({
              imgUrl: data.imgUrl,
            });
          },
          error: error => {
            this.toastService.setWarningToastMessage(error.error.message)
          }
        })
      }
    }
  }
}
