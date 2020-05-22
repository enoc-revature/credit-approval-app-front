
import { AppPage } from './app.po';
import { browser, logging, element, by } from 'protractor';
// Xpath = tagName[@attribute=attrubute_value]

describe('data-form e2e', () => {
  let page: AppPage;

//   beforeEach(() => {
//     page = new AppPage();
//   });

  beforeEach(async function(){
      // Need to wait for page to finish loading.
      await browser.get('http://localhost:4200/');
  
  });

  it('should display h1 header', () => {
    // page.navigateTo();

    let elem = element(by.id("data-form-headerId"));
    let text = elem.getText();
    expect(text).toBe("Credit Loan Form");
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});

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