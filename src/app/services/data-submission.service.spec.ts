import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DataSubmissionService } from './data-submission.service';
// import { Observable, of } from 'rxjs';
import { RESULT_TRUE,RESULT_FALSE } from 'src/mock-data/results';
import { FORM_DATA_B1,FORM_DATA_B2 } from 'src/mock-data/formDataBeforeService';
import { FORM_DATA_A1,FORM_DATA_A2 } from 'src/mock-data/formDataAfterService';

describe('DataSubmissionService', () => {
  let service: DataSubmissionService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [ HttpClientTestingModule ],
      providers: [ DataSubmissionService ]
    });
    service = TestBed.inject(DataSubmissionService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  // afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
  //   httpMock.verify();
  // }));

  afterEach( () => {
    httpMock.verify();
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

  it('test makeFormMachineReadable(FormGroup): string', () => {
    expect(service.makeFormMachineReadable(FORM_DATA_B2)).toBe(JSON.stringify(FORM_DATA_A2.value));
    }
  );

  // Doesn't quite work.  expect is true when it obviously isn't.
  it('test post request',
    () => {
    // When mocking http requests, all the testing occurs in the inject() function.
    // inject( [HttpClientTestingModule, DataSubmissionService],
    //         (httpMock: HttpTestingController, service: DataSubmissionService) => {
              let data: JSON;
    //           console.log("data: " + JSON.stringify(data));

              // Usual call to test a method.
              service.postData(FORM_DATA_B1).subscribe( data => {
                this.data = data;
                // expect(JSON.stringify(data)).toBe(JSON.stringify(RESULT_FALSE));
                expect(JSON.stringify(data)).toBe("Incorrect Expect"); // ???
              });

              // Actually mock the http request.
              let req = httpMock.expectOne("http://51.222.14.180:5000/");
              expect(req.request.method).toEqual("POST");

              // Send the mocked data to the service method.
              req.flush({data});
            }
  //   )
  );
});
