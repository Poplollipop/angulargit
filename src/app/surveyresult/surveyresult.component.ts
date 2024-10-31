import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables)

@Component({
  selector: 'app-surveyresult',
  standalone: true,
  imports: [],
  templateUrl: './surveyresult.component.html',
  styleUrl: './surveyresult.component.scss'
})
export class SurveyresultComponent {

  constructor(){
    
  }

}
