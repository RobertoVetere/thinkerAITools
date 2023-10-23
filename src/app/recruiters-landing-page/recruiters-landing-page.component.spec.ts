import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitersLandingPageComponent } from './recruiters-landing-page.component';

describe('RecruitersLandingPageComponent', () => {
  let component: RecruitersLandingPageComponent;
  let fixture: ComponentFixture<RecruitersLandingPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecruitersLandingPageComponent]
    });
    fixture = TestBed.createComponent(RecruitersLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
