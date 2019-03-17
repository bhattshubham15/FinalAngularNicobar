import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadercompoComponent } from './headercompo.component';

describe('HeadercompoComponent', () => {
  let component: HeadercompoComponent;
  let fixture: ComponentFixture<HeadercompoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadercompoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadercompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
