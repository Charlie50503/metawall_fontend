import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})





export class PostService {

  constructor(private http: HttpClient) { }

  public getData(
  ): Observable<Array<post>> {
    const URL = '/post/all-post';
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     'Access-Control-Allow-Origin': '*',
    //     'Access-Control-Allow-Credentials': 'true',
    //     'Access-Control-Allow-Headers': 'Content-Type',
    //     'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
    //     'key': 'x-api-key',
    //   })
    // }
    // const URL = 'http://localhost:3000/post/all-post';
    // return this.http.get<any>(URL,httpOptions);
    return this.http.get<Array<post>>(URL);
  }

}
