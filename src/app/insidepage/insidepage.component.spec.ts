import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsidepageComponent } from './insidepage.component';

describe('InsidepageComponent', () => {
  let component: InsidepageComponent;
  let fixture: ComponentFixture<InsidepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsidepageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsidepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
