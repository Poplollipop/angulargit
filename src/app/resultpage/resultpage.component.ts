import { Component,ViewChild } from '@angular/core';
import { ChartComponent } from "ng-apexcharts";


import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};


@Component({
  selector: 'app-resultpage',
  standalone: true,
  imports: [],
  templateUrl: './resultpage.component.html',
  styleUrl: './resultpage.component.scss'
})
export class ResultpageComponent {

    @ViewChild("chart") chart?: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
      this.chartOptions = {
        series: [44, 55, 13, 43, 22],
        chart: {
          width: 380,
          type: "pie"
        },
        labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: "bottom"
              }
            }
          }
        ]
      };
    }

}
