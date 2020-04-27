import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DataSubmissionService } from 'src/app/services/data-submission.service';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  constructor(
    private dss: DataSubmissionService
  )
  { }

  ngOnInit(): void {
  }

  approved = false;

  dataForm = new FormGroup({
    income: new FormControl(''),
    timeAtJob: new FormControl(''),
  });

  onSubmit(): void {
    this.dss.postData().subscribe(approved => {this.approved = approved;})
  }
}
