import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(
    private _route:ActivatedRoute, 
    private _router:Router, 
    private formBuilder: FormBuilder) { 
    this.buildForm();
  }

  ngOnInit() {

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
