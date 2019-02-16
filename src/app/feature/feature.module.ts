import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FeatureComponent } from './feature.component';
import { SchoolDiaryComponent } from './components/school-diary/school-diary.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NotesComponent } from './components/notes/notes.component';

import { AgGridModule } from 'ag-grid-angular';

import { FullCalendarModule } from 'primeng/fullcalendar';
import { SchoolDiaryDetailsComponent } from './components/school-diary-details/school-diary-details.component';

@NgModule({
  declarations: [FeatureComponent, 
    SchoolDiaryComponent, 
    HomePageComponent, 
    NotesComponent, 
    SchoolDiaryDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    AgGridModule.withComponents([]),
    FullCalendarModule
  ],
  exports: [
    FeatureComponent,
    HomePageComponent,
    SchoolDiaryComponent,
    SchoolDiaryDetailsComponent,
    NotesComponent
  ]
})
export class FeatureModule { }
