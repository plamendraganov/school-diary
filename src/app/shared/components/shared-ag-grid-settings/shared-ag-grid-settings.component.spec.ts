import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedAgGridSettingsComponent } from './shared-ag-grid-settings.component';

describe('SharedAgGridSettingsComponent', () => {
  let component: SharedAgGridSettingsComponent;
  let fixture: ComponentFixture<SharedAgGridSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        SharedAgGridSettingsComponent 
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedAgGridSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
