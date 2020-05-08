import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DataSubmissionService } from 'src/app/services/data-submission.service';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  constructor(
    private dss: DataSubmissionService
  )
  { }

  ngOnInit(): void {
  }

  approved = false;

  //TODO: add validation code to form
  dataForm = new FormGroup({
    checking: new FormControl(''),
    term_months: new FormControl(''),
    cred_hist: new FormControl(''),
    purpose: new FormControl(''),
    amount: new FormControl(''),
    savings: new FormControl(''),
    employment_hist: new FormControl(''),
    guarantors: new FormControl(''),
    residence: new FormControl(''),
    property: new FormControl(''),
    age: new FormControl(''),
    other_debt: new FormControl(''),
    housing: new FormControl(''),
    cred_this_bank: new FormControl(''),
    employment_curr: new FormControl(''),
    household_size: new FormControl(''),
    phone: new FormControl(''),
    foreign_worker: new FormControl(''),
    gender: new FormControl(''),
    marital_status: new FormControl('')
  });

  modifyFormGroup(form: FormGroup): FormGroup{
    // String values
    form.value.purpose = `{"0":"${form.value.purpose}"}`;
    form.value.cred_hist = `{"0":"${form.value.cred_hist}"}`;
    form.value.employment_hist = `{"0":"${form.value.employment_hist}"}`;
    form.value.guarantors = `{"0":"${form.value.guarantors}"}`;
    form.value.residence = `{"0":"${form.value.residence}"}`;
    form.value.property = `{"0":"${form.value.property}"}`;
    form.value.other_debt = `{"0":"${form.value.other_debt}"}`;
    form.value.cred_this_bank = `{"0":"${form.value.cred_this_bank}"}`;
    form.value.employment_curr = `{"0":"${form.value.employment_curr}"}`;
    form.value.phone = `{"0":"${form.value.phone}"}`;
    form.value.foreign_worker = `{"0":"${form.value.foreign_worker}"}`;
    form.value.gender = `{"0":"${form.value.gender}"}`;
    form.value.marital_status = `{"0":"${form.value.marital_status}"}`;
    form.value.housing = `{"0":"${form.value.housing}"}`;

    // Numeric values
    form.value.checking = `{"0":${form.value.checking}}`;
    form.value.term_months = `{"0":${form.value.term_months}}`;
    form.value.amount = `{"0":${form.value.amount}}`;
    form.value.savings = `{"0":${form.value.savings}}`;
    form.value.age = `{"0":${form.value.age}}`;
    form.value.household_size = `{"0":${form.value.household_size}}`;

    return form;
  }

  boolToString(b): string {
    if(b==true) //Not just truthy, but specifically true.
      return "yes";
    else
      return "no";
  }

  onSubmit(): void {
    if (this.dataForm.valid) {
      console.log("Form Submitted!");
      console.log("Form Before:");
      console.log(this.dataForm.value);

      this.dataForm.value.phone = this.boolToString(this.dataForm.value.phone);
      this.dataForm.value.foreign_worker = this.boolToString(this.dataForm.value.foreign_worker);
      this.dataForm = this.modifyFormGroup(this.dataForm);
      console.log("Form After:");
      console.log(this.dataForm.value);
      this.dss.postData(this.dataForm.value).subscribe(approved => {this.approved = approved;})
      //this.dataForm.reset();
    }
  }
}
