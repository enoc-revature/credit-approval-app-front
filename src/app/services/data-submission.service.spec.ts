import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DataSubmissionService } from './data-submission.service';
// import { Observable, of } from 'rxjs';
import { RESULT_TRUE,RESULT_FALSE } from 'src/mock-data/results';

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

  it('test post request', 
    let formStr = FORM_DATA_1.value;
    // When mocking http requests, all the testing occurs in the inject() function.
    inject( [HttpClientTestingModule, DataSubmissionService],
            (httpMock: HttpTestingController, service: DataSubmissionService) => {
              service.postData(formStr).subscribe( data => {

              });
            }
    )
  );
});
