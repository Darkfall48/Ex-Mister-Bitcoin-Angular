//? Libraries
import { Component } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent {
  public chart: any;

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    this.chart = new Chart('bar-chart', {
      type: 'bar', //this denotes the type of chart
      data: {
        // values on X-Axis
        labels: [],
        datasets: [
          {
            label: 'Value (USD)',
            backgroundColor: 'gold',
            data: null,
          },
        ],
      },
      options: {
        aspectRatio: 2.5,
        responsive: true,
      },
    });
  }
}
