import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from '../../../app-routing.module';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AgGridModule } from 'ag-grid-angular';
import { FullCalendarModule } from 'primeng/fullcalendar';
import { NgxLoadingModule } from 'ngx-loading';

import { StoreModule } from '@ngrx/store';
import { studentReducer } from 'src/app/store/reducers/reducer';

import { SchoolDiaryDetailsComponent } from './school-diary-details.component';
import { SchoolDiaryComponent } from '../school-diary/school-diary.component';
import { AddNewStudentComponent } from '../add-new-student/add-new-student.component';
import { HomePageComponent } from '../home-page/home-page.component';
import { NotesComponent } from '../notes/notes.component';

describe('SchoolDiaryDetailsComponent', () => {
  let component: SchoolDiaryDetailsComponent;
  let fixture: ComponentFixture<SchoolDiaryDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        AgGridModule,
        FullCalendarModule,
        NgxLoadingModule,
        StoreModule.forRoot({
          classStudents: studentReducer
        }),
      ],
      declarations: [ 
        SchoolDiaryDetailsComponent,
        SchoolDiaryComponent,
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
    fixture = TestBed.createComponent(SchoolDiaryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
