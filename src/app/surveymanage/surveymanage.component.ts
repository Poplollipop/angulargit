import { JsonPipe } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { NgbDatepickerModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

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

export interface Element2 {
  userId: string;
  userName: string;
  doneTime: string;
  userReply: string
}
const ELEMENT_DATA2: Element2[] = [
  { userId: '#3', userName: '李小星', doneTime: '2024/10/30 18:50', userReply: '前往' },
  { userId: '#2', userName: '王小名', doneTime: '2024/10/20 17:50', userReply: '前往' },
  { userId: '#1', userName: '陳小華', doneTime: '2024/10/09 16:50', userReply: '前往' },
];

@Component({
  selector: 'app-surveymanage',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterModule, RouterOutlet, MatPaginatorModule, MatTableModule, MatFormFieldModule, MatSelectModule, MatTabsModule, NgbDatepickerModule, NgbAlertModule, FormsModule, JsonPipe, MatIconModule],
  templateUrl: './surveymanage.component.html',
  styleUrl: './surveymanage.component.scss'
})
export class SurveymanageComponent {
  constructor(private router: Router) { }

  startDate: any;
  endDate: any;

  displayedColumns: string[] = ['quizid', 'quizname', 'quizvariety', 'quizmust', 'quizedit'];
  dataSource = [...ELEMENT_DATA];

  displayedColumns1: string[] = ['userId', 'userName', 'doneTime', 'userReply'];
  dataSource1 = [...ELEMENT_DATA2];

  @ViewChild(MatTable)
  table!: MatTable<Element>;
  table1!: MatTable<Element>;

  removeData() {
    this.dataSource.pop();
    this.table.renderRows();
  }

  goresult() {
    this.router.navigateByUrl('/surveyresult')
  }
}
