import { Component, OnInit } from '@angular/core';
import { ShareAgGridDataService } from 'src/app/shared/services/share-ag-grid-data.service';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-school-diary-details',
  templateUrl: './school-diary-details.component.html',
  styleUrls: ['./school-diary-details.component.scss']
})
export class SchoolDiaryDetailsComponent implements OnInit {
  studentDetails: FormGroup;
  firstName;
  lastName;
  address;
  phoneNumber;
  notes;

  firstNameControl;
  lastNameControl;
  addressControl;
  receivedData: any;

  constructor(
    public shareAgGridDataService: ShareAgGridDataService, 
    private _route:ActivatedRoute, 
    private _router:Router, 
    private formBuilder: FormBuilder) { }

  async ngOnInit() {
    this.receivedData = this.shareAgGridDataService.agGridData;
    console.log(this.receivedData);
    // console.log(this.receivedData.firstName);
    this.studentDetails = this.formBuilder.group({
      firstName: this.formBuilder.control('', [Validators.required, Validators.minLength(3)]),
      lastName: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      address: this.formBuilder.control('', Validators.required),
      phoneNumber: this.formBuilder.control(''),
      notes: this.formBuilder.control('')
    });

    this.populateStudentProfile();
    
    this.onChanges();

    this.firstNameControl = this.studentDetails.get('firstName');
    this.lastNameControl = this.studentDetails.get('lastName');
    this.addressControl = this.studentDetails.get('address');
  }

  populateStudentProfile() {
    let controls = this.studentDetails.controls;
    let controlNames = ['firstName', 'lastName', 'address', 'phoneNumber', 'notes'];
    controlNames.forEach(control => {
      controls[control].setValue(this.receivedData[control])
    })
  }

  onChanges(): void {
    this.studentDetails.get('firstName').valueChanges.subscribe(val => {
      this.firstName = val;
    });
    this.studentDetails.get('lastName').valueChanges.subscribe(val => {
      this.lastName = val;
    });
    this.studentDetails.get('address').valueChanges.subscribe(val => {
      this.address = val;
    });
    this.studentDetails.get('phoneNumber').valueChanges.subscribe(val => {
      this.phoneNumber = val;
    });
    this.studentDetails.get('notes').valueChanges.subscribe(val => {
      this.notes = val;
    });
  }

  saveStudentProfile() {
    // console.log(this.studentDetails.value);
    this._router.navigate(['/school-diary']);
  }

  onResetForm() {
    this.studentDetails.reset();
  }

  onBackToDiary(): void {
    this._router.navigate(['/school-diary']);
  }
}
