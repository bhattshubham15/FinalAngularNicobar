import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardcompoComponent } from './cardcompo.component';

describe('CardcompoComponent', () => {
  let component: CardcompoComponent;
  let fixture: ComponentFixture<CardcompoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardcompoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardcompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
