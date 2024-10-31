import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';


interface Link {
  path: string;
  label: string;
}

@Component({
  selector: 'app-surveymanage',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterModule, RouterOutlet, MatTabsModule, FormsModule],
  templateUrl: './surveymanage.component.html',
  styleUrl: './surveymanage.component.scss'
})
export class SurveymanageComponent {
  constructor(private router: Router) { }
  links: Link[] = [
    { path: '/surveycreate',  label: '問卷' },
    { path: '/surveyquiz',  label: '題目' },
    { path: '/surveyfeedback',  label: '問卷回饋' },
    { path: '/surveystatistics', label: '統計' },
];

activePath = this.links[0].path;

onActivate(path: string) {
    this.activePath = path;
}
}
