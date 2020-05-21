import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DataFormComponent } from './data-form.component';
import { DataSubmissionService } from 'src/app/services/data-submission.service';
import { RESULT_TRUE,RESULT_FALSE } from 'src/mock-data/results';
import { FORM_DATA_B1,FORM_DATA_B2 } from 'src/mock-data/formDataBeforeService';
import { FORM_DATA_A1,FORM_DATA_A2 } from 'src/mock-data/formDataAfterService';
import { element, by, $ } from 'protractor';

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
    document.getElementById("amountId").innerHTML = "1";
  });
});
