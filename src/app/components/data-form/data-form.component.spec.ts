import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DataFormComponent } from './data-form.component';
import { DataSubmissionService } from 'src/app/services/data-submission.service';
import { RESULT_TRUE, RESULT_FALSE } from 'src/mock-data/results';
import { FORM_DATA_B1, FORM_DATA_B2 } from 'src/mock-data/formDataBeforeService';
import { FORM_DATA_A1, FORM_DATA_A2 } from 'src/mock-data/formDataAfterService';
import { element, by } from 'protractor';

describe('DataFormComponent', () => {
  let component: DataFormComponent;
  let fixture: ComponentFixture<DataFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataFormComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [ DataSubmissionService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('test input fields to formGroup', () => {
    
    // String
    // let elem = document.getElementById("#purposeId");
    // console.log(elem.);
    // document.getElementById("#purposeId").innerText = FORM_DATA_B1.value.purpose;
    // document.getElementById("#cred_histId").innerHTML = FORM_DATA_B1.value.cred_hist;
    // document.getElementById("#employment_histId").innerHTML = FORM_DATA_B1.value.employment_hist;
    // document.getElementById("#guarantorsId").innerHTML = FORM_DATA_B1.value.guarantors;
    // document.getElementById("#propertyId").innerHTML = FORM_DATA_B1.value.property;
    // document.getElementById("#other_debtId").innerHTML = FORM_DATA_B1.value.other_debt;
    // document.getElementById("#employment_currId").innerHTML = FORM_DATA_B1.value.employment_curr;
    // document.getElementById("#genderId").innerHTML = FORM_DATA_B1.value.gender;
    // document.getElementById("#marital_statusId").innerHTML = FORM_DATA_B1.value.marital_status;
    // document.getElementById("#housingId").innerHTML = FORM_DATA_B1.value.housing;
    // document.getElementById("#checkingId").innerHTML = FORM_DATA_B1.value.checking;
    // document.getElementById("#savingsId").innerHTML = FORM_DATA_B1.value.savings;
      
    // // Numeric
    // document.getElementById("#residenceId").innerHTML = FORM_DATA_B1.value.residence;
    // document.getElementById("#term_monthsId").innerHTML = FORM_DATA_B1.value.term_months;
    // document.getElementById("#amountId").innerHTML = FORM_DATA_B1.value.amount;
    // document.getElementById("#ageId").innerHTML = FORM_DATA_B1.value.age;
    // document.getElementById("#household_sizeId").innerHTML = FORM_DATA_B1.value.household_size;
    // document.getElementById("#cred_this_bankId").innerHTML = FORM_DATA_B1.value.cred_this_bank;
      
    // // Boolean
    // document.getElementById("#foreign_workerId").innerHTML = FORM_DATA_B1.value.foreign_worker;
    // document.getElementById("#phoneId").innerHTML = FORM_DATA_B1.value.phone;
  });
});
