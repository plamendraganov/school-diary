import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolDiaryDetailsComponent } from './school-diary-details.component';

describe('SchoolDiaryDetailsComponent', () => {
  let component: SchoolDiaryDetailsComponent;
  let fixture: ComponentFixture<SchoolDiaryDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolDiaryDetailsComponent ]
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
