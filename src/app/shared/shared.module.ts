import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';

@NgModule({
  declarations: [SharedComponent, DynamicFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    SharedComponent
  ]
})
export class SharedModule { }
