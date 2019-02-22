import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AgGridModule } from 'ag-grid-angular';
import { FullCalendarModule } from 'primeng/fullcalendar';
import { NgxLoadingModule } from 'ngx-loading';

import { StoreModule } from '@ngrx/store';
import { studentReducer } from 'src/app/store/reducers/reducer';

import { AddNewStudentComponent } from '../../components/add-new-student/add-new-student.component';
import { SchoolDiaryComponent } from '../school-diary/school-diary.component';
import { SchoolDiaryDetailsComponent } from '../school-diary-details/school-diary-details.component';
import { HomePageComponent } from '../home-page/home-page.component';
import { NotesComponent } from '../notes/notes.component';

describe('AddNewStudentComponent', () => {
  let component: AddNewStudentComponent;
  let fixture: ComponentFixture<AddNewStudentComponent>;

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
        })
      ],
      declarations: [ 
        AddNewStudentComponent,
        SchoolDiaryComponent,
        SchoolDiaryDetailsComponent,
        HomePageComponent,
        NotesComponent, 
      ],
      providers: [{
        provide: APP_BASE_HREF,
        useValue: '/'
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
