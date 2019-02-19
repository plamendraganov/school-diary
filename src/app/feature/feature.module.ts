import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { FeatureComponent } from './feature.component';
import { SchoolDiaryComponent } from './components/school-diary/school-diary.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NotesComponent } from './components/notes/notes.component';

import { AgGridModule } from 'ag-grid-angular';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';

import { FullCalendarModule } from 'primeng/fullcalendar';
import { SchoolDiaryDetailsComponent } from './components/school-diary-details/school-diary-details.component';
import { AddNewStudentComponent } from './components/add-new-student/add-new-student.component';

@NgModule({
  declarations: [FeatureComponent, 
    SchoolDiaryComponent, 
    HomePageComponent, 
    NotesComponent, 
    SchoolDiaryDetailsComponent, AddNewStudentComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([]),
    FullCalendarModule,
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.circleSwish,
      backdropBackgroundColour: 'rgba(0, 0, 0, 0.1)',
      primaryColour: '#ff0000'
    })
  ],
  exports: [
    FeatureComponent,
    HomePageComponent,
    SchoolDiaryComponent,
    SchoolDiaryDetailsComponent,
    AddNewStudentComponent,
    NotesComponent
  ]
})
export class FeatureModule { }
