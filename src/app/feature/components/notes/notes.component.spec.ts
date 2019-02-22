import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullCalendarModule } from 'primeng/fullcalendar';

import { NotesComponent } from './notes.component';

describe('NotesComponent', () => {
  let component: NotesComponent;
  let fixture: ComponentFixture<NotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FullCalendarModule
      ],
      declarations: [ 
        NotesComponent 
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
