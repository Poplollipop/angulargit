import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyquizComponent } from './surveyquiz.component';

describe('SurveyquizComponent', () => {
  let component: SurveyquizComponent;
  let fixture: ComponentFixture<SurveyquizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SurveyquizComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveyquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
