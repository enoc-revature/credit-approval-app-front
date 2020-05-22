import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DataSubmissionService } from 'src/app/services/data-submission.service';
import { formInputTemplate } from 'src/models/formData1';

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

  approved: JSON;
  showSuccess = false;
  showDenied = false;

  //TODO: add validation code to form
  formInput = formInputTemplate;
  // formInput = new FormGroup({
  //   checking: new FormControl(''),
  //   term_months: new FormControl(''),
  //   cred_hist: new FormControl(''),
  //   purpose: new FormControl(''),
  //   amount: new FormControl(''),
  //   savings: new FormControl(''),
  //   employment_hist: new FormControl(''),
  //   guarantors: new FormControl(''),
  //   residence: new FormControl(''),
  //   property: new FormControl(''),
  //   age: new FormControl(''),
  //   other_debt: new FormControl(''),
  //   housing: new FormControl(''),
  //   cred_this_bank: new FormControl(''),
  //   employment_curr: new FormControl(''),
  //   household_size: new FormControl(''),
  //   phone: new FormControl(''),
  //   foreign_worker: new FormControl(''),
  //   gender: new FormControl(''),
  //   marital_status: new FormControl('')
  // });


  popupOfResult(approved: JSON): void {
        let result = approved["result"];
        if(result === 1.0)
          this.showSuccess = true;
        else
          this.showDenied = true;

  }

  onSubmit(): void {
    let output: string;
    if (this.formInput.valid) {
      // this.dss.postData(output).subscribe(approved => {
      this.dss.postData(this.formInput).subscribe(approved => {
        this.popupOfResult(approved);
      })
      this.formInput.reset();
    }
  }
}
