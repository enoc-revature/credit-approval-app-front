import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

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

  postData(data: FormGroup): Observable<boolean> {
    console.log("postData()");
    console.log(JSON.stringify(data));
    return this.http.post<boolean>(this.url, data)
  }
}
