import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodycompoComponent } from './bodycompo.component';

describe('BodycompoComponent', () => {
  let component: BodycompoComponent;
  let fixture: ComponentFixture<BodycompoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodycompoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodycompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
