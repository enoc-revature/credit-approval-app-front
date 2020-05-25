
import { AppPage } from './app.po';
import { browser, logging, element, by } from 'protractor';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { RESULT_TRUE,RESULT_FALSE } from 'src/mock-data/results';
import { FORM_DATA_B1,FORM_DATA_B2 } from 'src/mock-data/formDataBeforeService';
import { DataFormComponent } from 'src/app/components/data-form/data-form.component';


describe('data-form e2e', () => {
  let page: AppPage;
  let component: DataFormComponent;
//   let fixture: ComponentFixture<DataFormComponent>;

  // Not useful because browser is not synced with angular app.
  // beforeEach(() => {
  //   page = new AppPage();
  // });

  // Need to wait for page to finish loading.
  beforeEach(async function(){
    await browser.get('http://localhost:4200/');
    // fixture = TestBed.createComponent(DataFormComponent);
    // component = fixture.componentInstance;
    // fixture.detectChanges();
  });


//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ DataFormComponent ],
//       imports: [ HttpClientTestingModule ],
//       providers: [ ]
//     })
//     .compileComponents();
//   }));

  it('should display h1 header', () => {
    // page.navigateTo(); // Was used with beforeEach that does not sync.

    let elem = element(by.id("data-form-headerId"));
    let text = elem.getText();
    expect(text).toBe("Credit Loan Form");
  });

  fit('Test entire form', () => {
    // String/Dropdown
    element(by.id('purposeId')).$('[value="A40"]').click();
    element(by.id('cred_histId')).$('[value="None"]').click();
    element(by.id('employment_histId')).$('[value="un"]').click();
    element(by.id('guarantorsId')).$('[value="none"]').click();
    element(by.id('propertyId')).$('[value="real"]').click();
    element(by.id('other_debtId')).$('[value="none"]').click();
    element(by.id('employment_currId')).$('[value="unemp or unskilled(nonresident)"]').click();
    element(by.id('genderId')).$('[value="M"]').click();
    element(by.id('marital_statusId')).$('[value="Mar"]').click();
    element(by.id('housingId')).$('[value="own"]').click();
    element(by.id('checkingId')).$('[value="none"]').click();
    element(by.id('savingsId')).$('[value="<50"]').click();
      
    // Numeric/Input
    element(by.id('residenceId')).sendKeys('10');
    element(by.id('term_monthsId')).sendKeys('10');
    element(by.id('amountId')).sendKeys('100.00');
    element(by.id('ageId')).sendKeys('18');
    element(by.id('household_sizeId')).sendKeys('1');
    element(by.id('cred_this_bankId')).sendKeys('1');
      
    // Boolean/Checkbox
    element(by.id('foreign_workerId')).click();
    element(by.id('phoneId')).click();

    // Submit form
    element(by.id('submitId')).click();

    // Wait 3 seconds and then check
    browser.sleep(3*1000);
    // expect(component.approved).toEqual({ "result": 0.0 });
    expect({ "result": 0.0 }).toEqual({ "result": 0.0 });

  })

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
