import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolDiaryComponent } from './school-diary.component';

describe('SchoolDiaryComponent', () => {
  let component: SchoolDiaryComponent;
  let fixture: ComponentFixture<SchoolDiaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolDiaryComponent ]
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
