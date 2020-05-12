import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSubmissionService {

  constructor(
    private http: HttpClient
  )
  { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  url = "http://51.222.14.180:5000/";

  postData(data: string): Observable<JSON> {
    // console.log("postData()");
    // console.log(data);
    return this.http.post<JSON>(this.url, data);
  }
}
