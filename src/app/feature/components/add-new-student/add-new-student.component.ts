import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/models/app-state';
import { AddStudent } from 'src/app/store/actions/actions';
import { Observable } from 'rxjs';
import { IStudentData } from 'src/app/store/models/student-data';

@Component({
  selector: 'app-add-new-student',
  templateUrl: './add-new-student.component.html',
  styleUrls: ['./add-new-student.component.scss']
})
export class AddNewStudentComponent implements OnInit {
  addStudentForm: FormGroup;
  // notesControls: FormArray;
  firstNameControl;
  lastNameControl;
  addressControl;

  students: Observable<IStudentData[]>

  constructor(
    private _route:ActivatedRoute, 
    private _router:Router, 
    private formBuilder: FormBuilder,
    private store: Store<IAppState>) { 
    this.buildForm();
  }

  ngOnInit() {
this.students = this.store.select(state => state.classStudents)
console.log(this.students);
  }

  buildForm() {
    this.addStudentForm = this.formBuilder.group({
      firstName: this.formBuilder.control(null, [Validators.required, Validators.minLength(3)]),
      lastName: this.formBuilder.control(null, [Validators.required, Validators.minLength(5)]),
      address: this.formBuilder.control(null, Validators.required),
      phoneNumber: this.formBuilder.control(null),
      notes: this.formBuilder.control(null)
      // notes: this.formBuilder.control([
      //   this.formBuilder.control(null)
      // ])
    });
    // this.notesControls = this.addStudentForm.get('notes') as FormArray;
    this.firstNameControl = this.addStudentForm.get('firstName');
    this.lastNameControl = this.addStudentForm.get('lastName');
    this.addressControl = this.addStudentForm.get('address');
  }

  onSubmitForm() {
    // console.log(this.addStudentForm.value);
    
    this.store.dispatch(new AddStudent(this.addStudentForm.value))
    console.log(this.store);
    this._router.navigate(['/school-diary']);
  }

  // onAddNote() {
  //   this.notesControls.push(this.formBuilder.control(null));
  //   console.log(this.notesControls);
  // }

  // onRemoveNote(index) {
  //   this.notesControls.removeAt(index);
  // }

  onResetForm() {
    this.addStudentForm.reset();
  }

  // onResetNotes() {
  //   this.notesControls.reset();
  // }

  onBackToDiary(): void {
    this._router.navigate(['/school-diary']);
  }
  

}
