import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-surveypage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './surveypage.component.html',
  styleUrl: './surveypage.component.scss'
  
})
export class SurveypageComponent {
  currentDate: Date = new Date();
  endDate: Date = new Date();
}
