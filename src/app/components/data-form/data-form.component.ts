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
  // formInput = {...formInputTemplate}; // Tried to change.
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

  // modifyFormGroup(form: FormGroup): string{
  //   form.value.purpose = {"0":form.value.purpose};
  //   form.value.cred_hist = {"0":form.value.cred_hist};
  //   form.value.employment_hist = {"0":form.value.employment_hist};
  //   form.value.guarantors = {"0":form.value.guarantors};
  //   form.value.property = {"0":form.value.property};
  //   form.value.other_debt = {"0":form.value.other_debt};
  //   form.value.employment_curr = {"0":form.value.employment_curr};
  //   form.value.phone = {"0":form.value.phone};
  //   form.value.foreign_worker = {"0":form.value.foreign_worker};
  //   form.value.gender = {"0":form.value.gender};
  //   form.value.marital_status = {"0":form.value.marital_status};
  //   form.value.housing = {"0":form.value.housing};
  //   form.value.checking = {"0":form.value.checking};
  //   form.value.savings = {"0":form.value.savings};

  //   // Numeric values
  //   form.value.residence = {"0":parseInt(form.value.residence)};
  //   form.value.term_months = {"0":parseInt(form.value.term_months)};
  //   form.value.amount = {"0":parseInt(form.value.amount)};
  //   form.value.age = {"0": parseInt(form.value.age)};
  //   form.value.household_size = {"0":parseInt(form.value.household_size)};
  //   form.value.cred_this_bank = {"0":parseInt(form.value.cred_this_bank)};

  //   return JSON.stringify(form.value);
  // }

  // boolToString(b): string {
  //   if(b==true) //Not just truthy, but specifically true.
  //     return "yes";
  //   else
  //     return "no";
  // }

  onSubmit(): void {
    let output: string;
    if (this.formInput.valid) {
      // console.log("Form Submitted!");

      // console.log("Form Before:");
      // console.log(this.formInput.value);
      // this.formInput.value.phone = this.boolToString(this.formInput.value.phone);
      // this.formInput.value.foreign_worker = this.boolToString(this.formInput.value.foreign_worker);
      // output = this.modifyFormGroup(this.formInput);

      // console.log("Form After:");
      // console.log(this.formInput.value);

      // this.dss.postData(output).subscribe(approved => {
      this.dss.postData(this.formInput).subscribe(approved => {
        this.approved = approved;
        // console.log("Result from postData().subscribe():");
        // console.log(approved);
        let result = approved["result"];
        if(result === 1.0)
          this.showSuccess = true;
        else
          this.showDenied = true;
      })
      this.formInput.reset();
    }
  }
}
