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

  //   get name(): number {
  //   // return this.dataForm.get("daysEmployed");
  //   return 0;
  // }
  dateToDays(d: FormControl): number {
    d.setValue('');
    return 0;
  }

  onSubmit(): void {
    if (this.dataForm.valid) {
      console.log("Form Submitted!");
      let currentDays = new Date().getTime();
      let daysEmployed = new Date(this.dataForm.value.daysEmployed).getTime();
      let daysAlive = new Date(this.dataForm.value.daysAlive).getTime();
      this.dataForm.value.daysEmployed = Math.floor((currentDays - daysEmployed)/1000/60/60/24);
      this.dataForm.value.daysAlive = Math.floor((currentDays - daysAlive)/1000/60/60/24);
      this.dss.postData(this.dataForm.value).subscribe(approved => {this.approved = approved;})
      //this.dataForm.reset();
  }
  }
  /*
    Field order and grouping:

      Employment Info:
      incomeTotal
      incomeType
      occupationType
      daysEmployed

      Family Info:
      familyStatus
      numChildren
      familyMembers

      Property Info
      housingType
      ownProperty
      ownCar

      Miscellaneous:
      educationType
      daysAlive
  */






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
