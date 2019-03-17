import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerocompoComponent } from './herocompo.component';

describe('HerocompoComponent', () => {
  let component: HerocompoComponent;
  let fixture: ComponentFixture<HerocompoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerocompoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerocompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
