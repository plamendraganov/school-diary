import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from '../../../app-routing.module';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AgGridModule } from 'ag-grid-angular';
import { FullCalendarModule } from 'primeng/fullcalendar';
import { NgxLoadingModule } from 'ngx-loading';

import { StoreModule } from '@ngrx/store';
import { studentReducer } from '../../../store/reducers/reducer';

import { SchoolDiaryComponent } from './school-diary.component';
import { SchoolDiaryDetailsComponent } from '../school-diary-details/school-diary-details.component';
import { AddNewStudentComponent } from '../add-new-student/add-new-student.component';
import { HomePageComponent } from '../home-page/home-page.component';
import { NotesComponent } from '../notes/notes.component';

describe('SchoolDiaryComponent', () => {
  let component: SchoolDiaryComponent;
  let fixture: ComponentFixture<SchoolDiaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        AgGridModule.withComponents([]),
        FullCalendarModule,
        NgxLoadingModule,
        StoreModule.forRoot({
          classStudents: studentReducer
        }),
      ],
      declarations: [ 
        SchoolDiaryComponent,
        SchoolDiaryDetailsComponent,
        AddNewStudentComponent,
        HomePageComponent,
        NotesComponent
      ],
      providers: [{
        provide: APP_BASE_HREF,
        useValue: '/'
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolDiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
