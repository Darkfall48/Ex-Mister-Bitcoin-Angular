//? Libraries
import { Component } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { BitcoinService } from 'src/app/services/bitcoin.service';

@Component({
  selector: 'line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent {
  constructor(private bitcoinService: BitcoinService) {}
  public chart: any;
  avg: any;

  async ngOnInit() {
    this.getAvg();
    this.createChart();
  }
  createChart() {
    this.chart = new Chart('line-chart', {
      type: 'line', //this denotes the type of chart
      data: {
        // values on X-Axis
        labels: this.getDataLabels(),
        datasets: this.getDatasetData(),
      },
      options: {
        aspectRatio: 2.5,
        responsive: true,
      },
    });
  }

  async getAvg() {
    try {
      this.avg = await this.bitcoinService.getAvgBlockSize();
    } catch (err) {
      console.log('Cannot load chart:', err);
    }
  }

  getDataLabels() {
    return this.avg.values.map((value: { x: number }) => {
      const date = new Date(value.x * 1000);
      return `${date.getDate() + 1}.${date.getMonth() + 1}`;
    });
  }
  getDatasetData() {
    return this.avg.values.map((value: { y: any }) => value.y);
  }
}
