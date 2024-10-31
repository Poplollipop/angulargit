import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyfeedbackComponent } from './surveyfeedback.component';

describe('SurveyfeedbackComponent', () => {
  let component: SurveyfeedbackComponent;
  let fixture: ComponentFixture<SurveyfeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SurveyfeedbackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveyfeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
