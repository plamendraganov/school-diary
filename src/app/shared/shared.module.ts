import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { SharedAgGridSettingsComponent } from './components/shared-ag-grid-settings/shared-ag-grid-settings.component';

@NgModule({
  declarations: [SharedComponent, DynamicFormComponent, SharedAgGridSettingsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    SharedComponent,
    SharedAgGridSettingsComponent
  ]
})
export class SharedModule { }
