import { PostCreateService } from './../../services/post-create.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UploadService } from 'src/app/services/upload.service';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';


@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss']
})
export class PostEditComponent implements OnInit {
  imgUrl:string = "";
  postForm: FormGroup = new FormGroup({
    content: new FormControl("", [Validators.required]),
    imgUrl: new FormControl(""),
  });
  constructor(
    private uploadService:UploadService,
    private postCreateService:PostCreateService,
    private toastService:ToastService,
    private router :Router
  ) { }

  ngOnInit(): void {
  }

  createPost() {
    this.postCreateService.createPost(this.postForm.value).subscribe(data=>{
      this.toastService.setSuccessToastMessage("新增成功")
      this.router.navigate(["/main/all-post"])
    })
  }

  onFileSelected(event:any){
    if(event.target.files){
      const file: File = event.target?.files[0];

      if (file) {
        const formData = new FormData();
        formData.append("avatar", file);

        this.uploadService.uploadImg(formData).subscribe(data => {
          this.imgUrl = data.imgUrl
          this.postForm.patchValue({
            imgUrl: data.imgUrl,
          });
        })
    }
    }
  }

}
