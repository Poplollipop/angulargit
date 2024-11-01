import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveystatisticsComponent } from './surveystatistics.component';

describe('SurveystatisticsComponent', () => {
  let component: SurveystatisticsComponent;
  let fixture: ComponentFixture<SurveystatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SurveystatisticsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveystatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
