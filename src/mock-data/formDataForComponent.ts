import { FormGroup, FormControl } from '@angular/forms';
import { formInputTemplate } from 'src/models/formData';

let tempForm = {...formInputTemplate};


/**
 *  FORM_DATA_1
 */
// String Values
tempForm.value.purpose = {"0":};
tempForm.value.cred_hist = {"0":};
tempForm.value.employment_hist = {"0":};
tempForm.value.guarantors = {"0":};
tempForm.value.property = {"0":};
tempForm.value.other_debt = {"0":};
tempForm.value.employment_curr = {"0":};
tempForm.value.phone = {"0":};
tempForm.value.foreign_worker = {"0":};
tempForm.value.gender = {"0":};
tempForm.value.marital_status = {"0":};
tempForm.value.housing = {"0":};
tempForm.value.checking = {"0":};
tempForm.value.savings = {"0":};

// Numeric values
tempForm.value.residence = {"0":parseInt(form.value.residence)};
tempForm.value.term_months = {"0":parseInt(form.value.term_months)};
tempForm.value.amount = {"0":parseInt(form.value.amount)};
tempForm.value.age = {"0": parseInt(form.value.age)};
tempForm.value.household_size = {"0":parseInt(form.value.household_size)};
tempForm.value.cred_this_bank = {"0":parseInt(form.value.cred_this_bank)};
export const FORM_DATA_1 = tempForm;

/**
 * FORM_DATA_2
 */