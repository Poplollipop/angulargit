import { Component } from '@angular/core';
import { SurveymanageComponent } from "../surveymanage/surveymanage.component";

@Component({
  selector: 'app-surveystatistics',
  standalone: true,
  imports: [SurveymanageComponent],
  templateUrl: './surveystatistics.component.html',
  styleUrl: './surveystatistics.component.scss'
})
export class SurveystatisticsComponent {

}
