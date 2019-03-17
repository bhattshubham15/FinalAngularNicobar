import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavcompoComponent } from './sidenavcompo.component';

describe('SidenavcompoComponent', () => {
  let component: SidenavcompoComponent;
  let fixture: ComponentFixture<SidenavcompoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavcompoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavcompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
