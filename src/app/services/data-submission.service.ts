import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { RESULT_TRUE,RESULT_FALSE } from 'src/mock-data/results';

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

  // url = "http://51.222.14.180:5000/"; // Endpoint to the predictive model is no longer available.

  postData(data: string): Observable<JSON> {
    console.log("postData()");
    console.log(data);
    // return this.http.post<JSON>(this.url, data);
    // let resultJson = JSON.parse(JSON.stringify(RESULT_TRUE));
    let resultJson = JSON.parse(JSON.stringify(RESULT_FALSE));
    console.log("Mocked Result:");
    console.log(resultJson);
    return of(resultJson);
  }
}
