import { Component, OnInit } from '@angular/core';
import { ShareAgGridDataService } from 'src/app/shared/services/share-ag-grid-data.service';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/models/app-state';
import { EditStudent } from 'src/app/store/actions/actions';

@Component({
  selector: 'app-school-diary-details',
  templateUrl: './school-diary-details.component.html',
  styleUrls: ['./school-diary-details.component.scss']
})
export class SchoolDiaryDetailsComponent implements OnInit {
  studentDetails: FormGroup;
  number;
  firstName;
  lastName;
  age;
  address;
  phoneNumber;
  notes;

  classNumberControl;
  firstNameControl;
  lastNameControl;
  ageControl;
  addressControl;
  receivedData: any;

  constructor(
    public shareAgGridDataService: ShareAgGridDataService, 
    private _route:ActivatedRoute, 
    private _router:Router, 
    private formBuilder: FormBuilder,
    private store: Store<IAppState>) { }

  async ngOnInit() {
    this.receivedData = this.shareAgGridDataService.agGridData;
    this.studentDetails = this.formBuilder.group({
      number: this.formBuilder.control('', [Validators.required, Validators.min(1)]),
      firstName: this.formBuilder.control('', [Validators.required, Validators.minLength(2)]),
      lastName: this.formBuilder.control('', [Validators.required, Validators.minLength(2)]),
      age: this.formBuilder.control(null, [Validators.required, Validators.min(6)]),
      address: this.formBuilder.control('', Validators.required),
      phoneNumber: this.formBuilder.control(''),
      notes: this.formBuilder.control('')
    });

    this.populateStudentProfile();
    
    this.onChanges();
    this.classNumberControl = this.studentDetails.get('number');
    this.firstNameControl = this.studentDetails.get('firstName');
    this.lastNameControl = this.studentDetails.get('lastName');
    this.ageControl = this.studentDetails.get('age');
    this.addressControl = this.studentDetails.get('address');
  }

  populateStudentProfile() {
    let controls = this.studentDetails.controls;
    let controlNames = ['number', 'firstName', 'lastName', 'age', 'address', 'phoneNumber', 'notes'];
    controlNames.forEach(control => {
      controls[control].setValue(this.receivedData[control])
    })
  }

  onChanges(): void {
    this.studentDetails.get('number').valueChanges.subscribe(val => {
      this.number = val;
    });
    this.studentDetails.get('firstName').valueChanges.subscribe(val => {
      this.firstName = val;
    });
    this.studentDetails.get('lastName').valueChanges.subscribe(val => {
      this.lastName = val;
    });
    this.studentDetails.get('age').valueChanges.subscribe(val => {
      this.age = val;
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
    this.store.dispatch(new EditStudent(this.studentDetails.value))

    console.log(this.studentDetails.value);
    this._router.navigate(['/school-diary']);
  }

  onResetForm() {
    this.studentDetails.get('number').reset();
    this.studentDetails.get('age').reset();
    this.studentDetails.get('address').reset();
    this.studentDetails.get('phoneNumber').reset();
    this.studentDetails.get('notes').reset();
  }

  onBackToDiary(): void {
    this._router.navigate(['/school-diary']);
  }
}
