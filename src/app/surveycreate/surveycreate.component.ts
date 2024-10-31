import { Component } from '@angular/core';
import { SurveymanageComponent } from "../surveymanage/surveymanage.component";
import { MatIconModule } from '@angular/material/icon';
import { NgbDatepickerModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-surveycreate',
  standalone: true,
  imports: [SurveymanageComponent, FormsModule, MatIconModule, NgbDatepickerModule, NgbAlertModule],
  templateUrl: './surveycreate.component.html',
  styleUrl: './surveycreate.component.scss'
})
export class SurveycreateComponent {
  readonly path = 'surveycreate';
  startDate: any;
  endDate: any;
}
