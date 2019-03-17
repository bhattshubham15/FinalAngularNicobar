import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Da2Component } from './da2.component';

describe('Da2Component', () => {
  let component: Da2Component;
  let fixture: ComponentFixture<Da2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Da2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Da2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
