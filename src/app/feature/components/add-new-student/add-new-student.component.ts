import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-new-student',
  templateUrl: './add-new-student.component.html',
  styleUrls: ['./add-new-student.component.scss']
})
export class AddNewStudentComponent implements OnInit {
  addStudentForm: FormGroup;
  // notesControls: FormArray;
  showWelcomeMessage: boolean = false;
  firstNameControl;
  lastNameControl;
  addressControl;

  constructor(private formBuilder: FormBuilder) { 
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
    this.firstNameControl.valueChanges
      .subscribe(value => {
        this.showWelcomeMessage = value.toLowerCase().trim() === 'paul';
      })

    this.lastNameControl = this.addStudentForm.get('lastName');
    this.addressControl = this.addStudentForm.get('address');
  }

  onSubmitForm() {
    console.log(this.addStudentForm.value);
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

}
