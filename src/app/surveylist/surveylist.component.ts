import { Component } from '@angular/core';
import { SearchComponent } from "../search/search.component";
import {ViewChild} from '@angular/core';
import {MatTable, MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

export interface PeriodicElement {
  name: string;
  surveyId: number;
  status: string;
  starttime: string;
  endtime: string;
  result: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {surveyId: 1, name: '問卷1', status: 'Open', starttime: '2024/10/28', endtime: '2024/10/30', result:'前往'},
  {surveyId: 2, name: '問卷2', status: 'Close', starttime: '2024/10/28', endtime: '2024/10/28', result:'前往'},
  {surveyId: 3, name: '問卷3', status: 'Open', starttime: '2024/10/27', endtime: '2024/10/30', result:'前往'},
  {surveyId: 4, name: '問卷4', status: 'Open', starttime: '2024/10/25', endtime: '2024/10/30', result:'前往'},
  {surveyId: 5, name: '問卷5', status: 'Open', starttime: '2024/10/24', endtime: '2024/11/30', result:'前往'},
  {surveyId: 6, name: '問卷6', status: 'Close', starttime: '2024/01/28', endtime: '2024/01/30', result:'前往'},
  {surveyId: 7, name: '問卷7', status: 'Close', starttime: '2024/10/09', endtime: '2024/10/10', result:'前往'},
  {surveyId: 8, name: '問卷8', status: 'Close', starttime: '2024/05/08', endtime: '2024/06/30', result:'前往'},
  {surveyId: 9, name: '問卷9', status: 'Close', starttime: '2024/07/28', endtime: '2024/09/30', result:'前往'},
  {surveyId: 10, name: '問卷10', status: 'Close', starttime: '2024/02/28', endtime: '2024/05/30', result:'前往'},
];

/**
 * @title Adding and removing data when using an array-based datasource.
 */
@Component({
  selector: 'app-surveylist',
  styleUrl:  './surveylist.component.scss',
  templateUrl: './surveylist.component.html',
  standalone: true,
  imports: [RouterModule,RouterLink, RouterLinkActive, RouterOutlet,MatPaginatorModule,MatIconModule,SearchComponent,MatButtonModule, MatTableModule],
})
export class SurveyListComponent {
  displayedColumns: string[] = ['surveyId', 'name', 'status', 'starttime','endtime','result'];
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
}