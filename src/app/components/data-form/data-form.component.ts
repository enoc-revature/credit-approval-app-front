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

  dataForm = new FormGroup({
    income: new FormControl(''),
    timeAtJob: new FormControl('')
  });

  //TODO: add validation code to form
  //TODO: add angular bootstrap
  //TODO: post formGroup
  onSubmit(): void {
    if (this.dataForm.valid) {
      console.log("Form Submitted!");
      this.dss.postData(this.dataForm).subscribe(approved => {this.approved = approved;})
      //this.dataForm.reset();
  }
  }
  /* Selection inputs
     NAME_INCOME_TYPE:
    'Working', 'Commercial associate', 'Pensioner', 'State servant', 'Student' (edited) 

    NAME_EDUCATION_TYPE:
    Higher education
    Secondary / secondary special
    Incomplete higher
    Lower secondary
    Academic degree

    NAME_FAMILY_STATUS:
    Civil marriage
    Married
    Single / not married
    Separated
    Widow

    NAME_HOUSING_TYPE:
    Rented apartment
    House / apartment
    Municipal apartment
    With parents
    Co-op apartment
    Office apartment

    OCCUPATION_TYPE:
    Security staff
    Sales staff
    Accountants
    Laborers
    Managers
    Drivers
    Core staff
    High skill tech staff
    Cleaning staff
    Private service staff
    Cooking staff
    Low-skill Laborers
    Medicine staff
    Secretaries
    Waiters/barmen staff
    HR staff
    Realty agents
    IT staff

    DAYS_BIRTH and DAYS_EMPLOYED are stored as days 


    Vars to Drop
    ID
    CODE_GENDER
    FLAG_MOBIL
    FLAG_WORK_PHONE
    FLAG_PHONE
    FLAG_EMAIL

    


  */
}
