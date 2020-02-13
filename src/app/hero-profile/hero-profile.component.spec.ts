import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroProfile } from './hero-profile.component';

describe('HeroProfile', () => {
  let component: HeroProfile;
  let fixture: ComponentFixture<HeroProfile>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroProfile ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroProfile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
