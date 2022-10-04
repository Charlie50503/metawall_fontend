import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { httpResponse } from '../interfaces/http.interface';
import { uploadBody } from '../interfaces/request/upload';
import { uploadResponse } from '../interfaces/response/upload';
import API_LIST from './api/api-list';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(
    private http: HttpClient
  ) { }

  public uploadImg(body:FormData
    ): Observable<uploadResponse> {
       return this.http.post<httpResponse>(API_LIST.POST.UPLOAD,body).pipe(
        map(response => response.data)
      )
    }
}
