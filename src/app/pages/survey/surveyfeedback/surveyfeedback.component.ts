import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule, MatTable } from '@angular/material/table';
import { SurveymanageComponent } from '../surveymanage/surveymanage.component';
import { MatPaginatorModule } from '@angular/material/paginator';




export interface Element {
  userId: string;
  userName: string;
  doneTime: string;
  userReply: string
}
const ELEMENT_DATA: Element[] = [
  { userId: '#3', userName: '李小星', doneTime: '2024/10/30 18:50', userReply: '前往' },
  { userId: '#2', userName: '王小名', doneTime: '2024/10/20 17:50', userReply: '前往' },
  { userId: '#1', userName: '陳小華', doneTime: '2024/10/09 16:50', userReply: '前往' },
];
@Component({
  selector: 'app-surveyfeedback',
  standalone: true,
  imports: [SurveymanageComponent, MatPaginatorModule, MatIconModule, FormsModule, MatTableModule],
  templateUrl: './surveyfeedback.component.html',
  styleUrl: './surveyfeedback.component.scss'
})
export class SurveyfeedbackComponent {

  @ViewChild(MatTable)
  table!: MatTable<Element>;
  displayedColumns: string[] = ['userId', 'userName', 'doneTime', 'userReply'];
  dataSource = [...ELEMENT_DATA];


}
