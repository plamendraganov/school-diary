import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/models/app-state';
import { AddStudent } from 'src/app/store/actions/actions';
import { Observable } from 'rxjs';
import { IStudentData } from 'src/app/store/models/student-data';
import { NumberValidator } from 'src/app/shared/number-validator';

@Component({
  selector: 'app-add-new-student',
  templateUrl: './add-new-student.component.html',
  styleUrls: ['./add-new-student.component.scss']
})
export class AddNewStudentComponent implements OnInit {
  addStudentForm: FormGroup;
  get notes(): FormArray {
    return <FormArray>this.addStudentForm.get('notes');
  }

  classNumberControl;
  firstNameControl;
  lastNameControl;
  ageControl;
  addressControl;

  students: Observable<IStudentData[]>

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private formBuilder: FormBuilder,
    private store: Store<IAppState>) { 
    this.buildForm();
  }

  ngOnInit() {
    this.students = this.store.select(state => state.classStudents);
  }

  buildForm() {
    this.addStudentForm = this.formBuilder.group({
      number: this.formBuilder.control(null, [Validators.required, Validators.min(1)]),
      firstName: this.formBuilder.control(null, [Validators.required, Validators.minLength(2)]),
      lastName: this.formBuilder.control(null, [Validators.required, Validators.minLength(2)]),
      age: this.formBuilder.control(null, [Validators.required, NumberValidator.range(6, 99)]),
      address: this.formBuilder.control(null, Validators.required),
      phoneNumber: this.formBuilder.control(null),
      notes: this.formBuilder.array([ this.buildNote() ])
    });
    // this.notesControls = this.addStudentForm.get('notes') as FormArray;
    this.classNumberControl = this.addStudentForm.get('number');
    this.firstNameControl = this.addStudentForm.get('firstName');
    this.lastNameControl = this.addStudentForm.get('lastName');
    this.ageControl = this.addStudentForm.get('age');
    this.addressControl = this.addStudentForm.get('address');
  }

  buildNote(): FormGroup {
    return this.formBuilder.group({
      note: ''
    })
  }

  addNewNote(): void {
    this.notes.push(this.buildNote());
  }

  onSubmitForm() {
    console.log(this.addStudentForm.value);
    
    this.store.dispatch(new AddStudent(this.addStudentForm.value))
    console.log(this.store);
    this.router.navigate(['/school-diary']);
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
    this.router.navigate(['/school-diary']);
  }

  

}
