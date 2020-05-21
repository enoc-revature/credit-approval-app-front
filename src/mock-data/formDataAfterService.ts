import { FormGroup, FormControl } from '@angular/forms';
import { formInputTemplate } from 'src/models/formData2';
export { FORM_DATA_A1,FORM_DATA_A2 };

let tempForm = formInputTemplate;
// let tmp = {...formInputTemplate};
// let tempForm = {...tmp};
/**
 * Valid Data
 */
// purpose = Purpose of Loan
// "A40" = New Car
// "A41" = Used Car
// "A42" = Furniture/Equipment
// "A43" = Radio/Television
// "A44" = Domestic Appliances
// "A45" = Repairs
// "A46" = Education
// "A48" = Retraining
// "A49" = Business
// "A410" = Other
let purpose = ["A40", "A41", "A42", "A43", "A44", "A45", "A46", "A48", "A49", "A410"];

// amount = Amount of Loan > 0.
let amount = 0.0;

// term_months = Length of the loan to maturity in months > 0.
let term_months = 0;

// guarantors
let guarantors = ["none", "co-applicant", "guarantor"];

// employment_curr = Type of current employment.
let employment_curr = ["unemp or unskilled(nonresident)", "unskilled(resident)", "skilled/official","mgmt/self/highly qu/officer"];

// employment_hist in years
let employment_hist = ["un", "<1", "1-4", "4-7", "7+"];

let foreign_worker = [false, true];

// checking = Current amount in checking account in dollars.
let checking = ["none","neg","<100","100+"];

// savings = Current amount in savings account in dollars.
let savings = ["<50","50-250","250-500",">500"];

// cred_this_bank = Other lines of credit with this bank >= 0.
let cred_this_bank = 0;

// cred_hist = Credit history in months >= 0.
// Pd = pending/delinquent
let cred_hist = ["None","Pd","current",">30","30+"];

// other_debt = Other forms of debt.
let other_debt = ["none","bank","stores"];

let marital_status = ["Mar","Div/Sep","Sing"];

// household_size = Size of household including yourself > 0;
let household_size = 1;

// property = Property owned
// real = Realestate
// life = Life insurance being actively dispensed.
let property = ["real","life","car/other","none"];

// residence = Number of years in current residence >= 0
let residence = 0;

// housing = Type of housing.
let housing = ["own","rent","free"];

// gender
// NB = Non-Binary
// ND = Not Disclosed
let gender = ["M","F","NB","ND"];

// age >= 18.
let age = 18;

// phone = Is their phone line under their name?
let phone = [false,true];

/**
 *  FORM_DATA_1
 */
// String Values
tempForm.value.purpose = {"0":purpose[0]};
tempForm.value.cred_hist = {"0":cred_hist[0]};
tempForm.value.employment_hist = {"0":employment_hist[0]};
tempForm.value.guarantors = {"0":guarantors[0]};
tempForm.value.property = {"0":property[0]};
tempForm.value.other_debt = {"0":other_debt[0]};
tempForm.value.employment_curr = {"0":employment_curr[0]};
tempForm.value.gender = {"0":gender[0]};
tempForm.value.marital_status = {"0":marital_status[0]};
tempForm.value.housing = {"0":housing[0]};
tempForm.value.checking = {"0":checking[0]};
tempForm.value.savings = {"0":savings[0]};

// Numeric values
tempForm.value.residence = {"0":residence};
tempForm.value.term_months = {"0":term_months};
tempForm.value.amount = {"0":amount};
tempForm.value.age = {"0":age};
tempForm.value.household_size = {"0":household_size};
tempForm.value.cred_this_bank = {"0":cred_this_bank};

// Boolean values
tempForm.value.foreign_worker = {"0":foreign_worker[0]};
tempForm.value.phone = {"0":phone[0]};

// const FORM_DATA_A1 = {...tempForm};
const FORM_DATA_A1 = tempForm;



/**
 * FORM_DATA_2
 */
tempForm.value.purpose = {"0":purpose[0]};
tempForm.value.cred_hist = {"0":cred_hist[0]};
tempForm.value.employment_hist = {"0":employment_hist[0]};
tempForm.value.guarantors = {"0":guarantors[0]};
tempForm.value.property = {"0":property[0]};
tempForm.value.other_debt = {"0":other_debt[0]};
tempForm.value.employment_curr = {"0":employment_curr[0]};
tempForm.value.gender = {"0":gender[0]};
tempForm.value.marital_status = {"0":marital_status[0]};
tempForm.value.housing = {"0":housing[0]};
tempForm.value.checking = {"0":checking[0]};
tempForm.value.savings = {"0":savings[0]};

// Numeric values
tempForm.value.residence = {"0":residence};
tempForm.value.term_months = {"0":term_months};
tempForm.value.amount = {"0":amount};
tempForm.value.age = {"0":age};
tempForm.value.household_size = {"0":household_size};
tempForm.value.cred_this_bank = {"0":cred_this_bank};

// Boolean values
tempForm.value.foreign_worker = {"0":"yes"};
tempForm.value.phone = {"0":"no"};

// const FORM_DATA_A1 = {...tempForm};
const FORM_DATA_A2 = tempForm;

