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
    grossIncome: new FormControl(''),
    incomeType: new FormControl(''),
    occupationType: new FormControl(''),
    daysEmployed: new FormControl(''),
    familyStatus: new FormControl(''),
    numChildren: new FormControl(''),
    familyMembers: new FormControl(''),
    housingType: new FormControl(''),
    ownProperty: new FormControl(''),
    ownCar: new FormControl(''),
    educationType: new FormControl(''),
    daysAlive: new FormControl('')
  });

  dateToDays(d): number {
      let currentTime = new Date().getTime();
      let givenTime = new Date(d).getTime();
      return Math.floor((currentTime - givenTime)/1000/60/60/24);
  }

  boolToY(b) {
    if(b==true) //Not just truthy, but specifically true.
      return "Y";
    else
      return "N";
  }

  onSubmit(): void {
    if (this.dataForm.valid) {
      console.log("Form Submitted!");

      this.dataForm.value.daysEmployed = this.dateToDays(this.dataForm.value.daysEmployed);
      this.dataForm.value.daysAlive = this.dateToDays(this.dataForm.value.daysAlive);

      this.dataForm.value.ownProperty = this.boolToY(this.dataForm.value.ownProperty);
      this.dataForm.value.ownCar = this.boolToY(this.dataForm.value.ownCar);

      this.dss.postData(this.dataForm.value).subscribe(approved => {this.approved = approved;})
      //this.dataForm.reset();
    }
  }
}
