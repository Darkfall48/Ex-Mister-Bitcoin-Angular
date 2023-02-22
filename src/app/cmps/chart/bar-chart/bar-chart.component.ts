//? Libraries
import { Component, Input } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { MarketPrice, Value } from 'src/app/models/graph.model';
import { BitcoinService } from 'src/app/services/bitcoin.service';

@Component({
  selector: 'bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent {
  constructor(private bitcoinService: BitcoinService) {}

  @Input() prices!: MarketPrice;

  ngOnInit() {
    var avgBlockSize = new Chart('avg-block-size', {
      type: 'bar',
      data: {
        labels: this.getMonthNames(this.prices.values),
        datasets: [
          {
            label: 'Market Price average 5 months',
            data: this.getData(this.prices.values),
            backgroundColor: 'gold',
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  getMonthAvg(values: Value[]) {
    const sum = values.reduce((acc, value) => acc + value.y, 0);
    return sum / values.length;
  }

  getMonthNames(values: Value[]) {
    return values.reduce((acc: string[], value) => {
      const date = new Date(value.x * 1000);
      if (!acc.includes(getMonthName(date))) acc.push(getMonthName(date));
      return acc;
    }, []);
  }

  getData(values: Value[]) {
    let saveIdx = 0;
    let prevDate = new Date(values[saveIdx].x * 1000);
    const result = values.reduce((acc: number[], value: Value, idx: number) => {
      const date = new Date(value.x * 1000);
      if (prevDate.getMonth() !== date.getMonth()) {
        const avg = this.getMonthAvg(values.slice(saveIdx, idx));
        prevDate = new Date(value.x * 1000);
        saveIdx = idx;
        acc.push(avg);
      }
      return acc;
    }, []);
    result.push(this.getMonthAvg(values.slice(saveIdx)));
    return result;
  }
}

function getMonthName(date: Date) {
  const monthNames = [
    'Jan`',
    'Feb`',
    'March',
    'April',
    'May',
    'June',
    'July',
    'Aug`',
    'Sep`',
    'Oct`',
    'Nov`',
    'Dec`',
  ];
  return monthNames[date.getMonth()];
}
