import { FormGroup, FormControl } from '@angular/forms';
export let formInputTemplate = new FormGroup({
    checking: new FormControl(''),
    term_months: new FormControl(''),
    cred_hist: new FormControl(''),
    purpose: new FormControl(''),
    amount: new FormControl(''),
    savings: new FormControl(''),
    employment_hist: new FormControl(''),
    guarantors: new FormControl(''),
    residence: new FormControl(''),
    property: new FormControl(''),
    age: new FormControl(''),
    other_debt: new FormControl(''),
    housing: new FormControl(''),
    cred_this_bank: new FormControl(''),
    employment_curr: new FormControl(''),
    household_size: new FormControl(''),
    phone: new FormControl(''),
    foreign_worker: new FormControl(''),
    gender: new FormControl(''),
    marital_status: new FormControl('')
  });
