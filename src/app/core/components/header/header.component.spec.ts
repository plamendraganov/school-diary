import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AgGridModule } from 'ag-grid-angular';
import { FullCalendarModule } from 'primeng/fullcalendar';
import { NgxLoadingModule } from 'ngx-loading';

import { HeaderComponent } from './header.component';
import { HomePageComponent } from 'src/app/feature/components/home-page/home-page.component';
import { SchoolDiaryComponent } from 'src/app/feature/components/school-diary/school-diary.component';
import { SchoolDiaryDetailsComponent } from 'src/app/feature/components/school-diary-details/school-diary-details.component';
import { AddNewStudentComponent } from 'src/app/feature/components/add-new-student/add-new-student.component';
import { NotesComponent } from 'src/app/feature/components/notes/notes.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    
    TestBed.configureTestingModule({
      imports: [
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        AgGridModule,
        FullCalendarModule,
        NgxLoadingModule
      ],
      declarations: [ 
        HeaderComponent,
        HomePageComponent,
        SchoolDiaryComponent,
        AddNewStudentComponent,
        SchoolDiaryDetailsComponent,
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
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
