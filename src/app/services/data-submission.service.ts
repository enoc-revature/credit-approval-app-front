import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { RESULT_TRUE,RESULT_FALSE } from 'src/mock-data/results';
import { FormGroup, FormControl } from '@angular/forms';

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

  /**
   * modifyFormGroup is used to make the form readable to the predictive back-end.
   * @param form 
   */
  modifyFormGroup(form: FormGroup): string{
    form.value.purpose = {"0":form.value.purpose};
    form.value.cred_hist = {"0":form.value.cred_hist};
    form.value.employment_hist = {"0":form.value.employment_hist};
    form.value.guarantors = {"0":form.value.guarantors};
    form.value.property = {"0":form.value.property};
    form.value.other_debt = {"0":form.value.other_debt};
    form.value.employment_curr = {"0":form.value.employment_curr};
    form.value.phone = {"0":form.value.phone};
    form.value.foreign_worker = {"0":form.value.foreign_worker};
    form.value.gender = {"0":form.value.gender};
    form.value.marital_status = {"0":form.value.marital_status};
    form.value.housing = {"0":form.value.housing};
    form.value.checking = {"0":form.value.checking};
    form.value.savings = {"0":form.value.savings};

    // Numeric values
    form.value.residence = {"0":parseInt(form.value.residence)};
    form.value.term_months = {"0":parseInt(form.value.term_months)};
    form.value.amount = {"0":parseInt(form.value.amount)};
    form.value.age = {"0": parseInt(form.value.age)};
    form.value.household_size = {"0":parseInt(form.value.household_size)};
    form.value.cred_this_bank = {"0":parseInt(form.value.cred_this_bank)};

    return JSON.stringify(form.value);
  }

  /**
   * bootToString is used to make the form readable to the predictive back-end.
   * @param b 
   */
  boolToString(b): string {
    if(b==true) //Not just truthy, but specifically true.
      return "yes";
    else
      return "no";
  }

  makeFormMachineReadable(formInput: FormGroup): string{
      formInput.value.phone = this.boolToString(formInput.value.phone);
      formInput.value.foreign_worker = this.boolToString(formInput.value.foreign_worker);
      return this.modifyFormGroup(formInput);

  }
  postData(data: FormGroup): Observable<JSON> {
      let machineData: string = this.makeFormMachineReadable(data);
    // Actual Code.
    // return this.http.post<JSON>(this.url, data);
    // let resultJson = JSON.parse(JSON.stringify(RESULT_TRUE));

    // Code to mock post request.
    let resultJson = JSON.parse(JSON.stringify(RESULT_FALSE));
    return of(resultJson);
  }
}
