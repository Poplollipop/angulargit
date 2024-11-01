import { Component, ViewChild } from '@angular/core';
import { SurveymanageComponent } from "../surveymanage/surveymanage.component";
import { MatIconModule } from '@angular/material/icon';
import { MatTable, MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


export interface Element {
  quizid: string;
  quizname: string;
  quizvariety: string;
  quizmust: boolean;
  quizedit: string
}

const ELEMENT_DATA: Element[] = [
  { quizid: '#1', quizname: 'Test1', quizvariety: '單選題', quizmust: true, quizedit: '編輯' },
  { quizid: '#2', quizname: 'Test2', quizvariety: '單選題', quizmust: true, quizedit: '編輯' },
  { quizid: '#3', quizname: 'Test3', quizvariety: '單選題', quizmust: false, quizedit: '編輯' },
  { quizid: '#4', quizname: 'Test4', quizvariety: '單選題', quizmust: false, quizedit: '編輯' },
  { quizid: '#5', quizname: 'Test5', quizvariety: '單選題', quizmust: true, quizedit: '編輯' },
];
@Component({
  selector: 'app-surveyquiz',
  standalone: true,
  imports: [SurveymanageComponent, MatIconModule, FormsModule, MatTableModule],
  templateUrl: './surveyquiz.component.html',
  styleUrl: './surveyquiz.component.scss'
})
export class SurveyquizComponent {
  constructor(private router: Router) { }
  gotosuveycreate() {
    this.router.navigateByUrl('/surveycreate')
  }

  displayedColumns: string[] = ['quizid', 'quizname', 'quizvariety', 'quizmust', 'quizedit'];
  dataSource = [...ELEMENT_DATA];
  @ViewChild(MatTable)
  table!: MatTable<Element>;


  removeData() {
    this.dataSource.pop();
    this.table.renderRows();
  }
}
