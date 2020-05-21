import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DataSubmissionService } from './data-submission.service';
// import { Observable, of } from 'rxjs';
import { RESULT_TRUE,RESULT_FALSE } from 'src/mock-data/results';
import { FORM_DATA_B1,FORM_DATA_B2 } from 'src/mock-data/formDataBeforeService';
import { FORM_DATA_A1,FORM_DATA_A2 } from 'src/mock-data/formDataAfterService';

describe('DataSubmissionService', () => {
  let service: DataSubmissionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [ HttpClientTestingModule ],
      providers: [ DataSubmissionService ]
    });
    service = TestBed.inject(DataSubmissionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('test boolToString(boolean): string.', () => {
    expect(service.boolToString(true)).toBe("yes");
    expect(service.boolToString(false)).toBe("no");
  });

  it('test modifyFormGroup(FormGroup): string.', () => {
    expect(service.modifyFormGroup(FORM_DATA_B1)).toBe(JSON.stringify(FORM_DATA_A1.value));
  });

  fit('test makeFormMachineReadable(FormGroup): string', () => {
    console.log(JSON.stringify(FORM_DATA_A2.value));
    expect(service.makeFormMachineReadable(FORM_DATA_B2)).toBe(JSON.stringify(FORM_DATA_A2.value));
  }

  );

  it('test post request', 
    // When mocking http requests, all the testing occurs in the inject() function.
    inject( [HttpClientTestingModule, DataSubmissionService],
            (httpMock: HttpTestingController, service: DataSubmissionService) => {
              service.postData(FORM_DATA_B1).subscribe( data => {

              });
            }
    )
  );
});
