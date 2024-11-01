import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveymanageComponent } from './surveymanage.component';

describe('InsidepageComponent', () => {
  let component: SurveymanageComponent;
  let fixture: ComponentFixture<SurveymanageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SurveymanageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveymanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
