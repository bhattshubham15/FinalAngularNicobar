import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardcompoComponent } from './dashboardcompo.component';

describe('DashboardcompoComponent', () => {
  let component: DashboardcompoComponent;
  let fixture: ComponentFixture<DashboardcompoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardcompoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardcompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
