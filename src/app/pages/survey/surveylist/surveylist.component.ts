import { Component } from '@angular/core';
import { SearchComponent } from "../search/search.component";
import { ViewChild } from '@angular/core';
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

export interface PeriodicElement {
  name: string;
  surveyCheckbox: boolean;
  surveyId: number;
  surveyEdit: boolean;
  status: string;
  starttime: string;
  endtime: string;
  result: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { surveyCheckbox: false, surveyId: 1, surveyEdit: false, name: '問卷1', status: 'Open', starttime: '2024/10/28', endtime: '2024/10/30', result: '前往' },
  { surveyCheckbox: false, surveyId: 2, surveyEdit: false, name: '問卷2', status: 'Close', starttime: '2024/10/28', endtime: '2024/10/28', result: '前往' },
  { surveyCheckbox: false, surveyId: 3, surveyEdit: false, name: '問卷3', status: 'Open', starttime: '2024/10/27', endtime: '2024/10/30', result: '前往' },
  { surveyCheckbox: false, surveyId: 4, surveyEdit: false, name: '問卷4', status: 'Open', starttime: '2024/10/25', endtime: '2024/10/30', result: '前往' },
  { surveyCheckbox: false, surveyId: 5, surveyEdit: false, name: '問卷5', status: 'Open', starttime: '2024/10/24', endtime: '2024/11/30', result: '前往' },
  { surveyCheckbox: false, surveyId: 6, surveyEdit: false, name: '問卷6', status: 'Close', starttime: '2024/01/28', endtime: '2024/01/30', result: '前往' },
  { surveyCheckbox: false, surveyId: 7, surveyEdit: false, name: '問卷7', status: 'Close', starttime: '2024/10/09', endtime: '2024/10/10', result: '前往' },
  { surveyCheckbox: false, surveyId: 8, surveyEdit: false, name: '問卷8', status: 'Close', starttime: '2024/05/08', endtime: '2024/06/30', result: '前往' },
  { surveyCheckbox: false, surveyId: 9, surveyEdit: false, name: '問卷9', status: 'Close', starttime: '2024/07/28', endtime: '2024/09/30', result: '前往' },
  { surveyCheckbox: false, surveyId: 10, surveyEdit: false, name: '問卷10', status: 'Close', starttime: '2024/02/28', endtime: '2024/05/30', result: '前往' },
];


@Component({
  selector: 'app-surveylist',
  styleUrl: './surveylist.component.scss',
  templateUrl: './surveylist.component.html',
  standalone: true,
  imports: [FormsModule ,RouterModule, RouterLink, RouterLinkActive, RouterOutlet, MatPaginatorModule, MatIconModule, SearchComponent, MatButtonModule, MatTableModule],
})
export class SurveyListComponent {
  constructor(private router: Router) { }

  displayedColumns: string[] = ['surveyCheckbox','surveyId', 'name', 'surveyEdit', 'status', 'starttime', 'endtime', 'result'];
  dataSource = [...ELEMENT_DATA];

  @ViewChild(MatTable)
  table!: MatTable<PeriodicElement>;

  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
    this.table.renderRows();
  }

  removeData() {
    this.dataSource.pop();
    this.table.renderRows();
  }

  gotoeditlist() {
    this.router.navigateByUrl('/surveycreate')
  }
}
