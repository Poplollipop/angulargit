import { CommonModule } from '@angular/common';
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
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterModule, RouterOutlet, MatTabsModule, FormsModule],
  templateUrl: './surveymanage.component.html',
  styleUrl: './surveymanage.component.scss'
})
export class SurveymanageComponent {
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.activePath = this.router.url.replace('/', '') || 'surveycreate';
    if (!this.links.some(link => link.path === this.activePath)) {
      this.activePath = 'surveycreate';
    }
  }

  links: Link[] = [
    { path: 'surveycreate', label: '問卷' },
    { path: 'surveyquiz', label: '題目' },
    { path: 'surveyfeedback', label: '問卷回饋' },
    { path: 'surveystatistics', label: '統計' },
  ];



  onActivate(path: string) {
    this.activePath = path;
    this.router.navigate([path]);
  }
  activePath: string = 'surveycreate';
}
