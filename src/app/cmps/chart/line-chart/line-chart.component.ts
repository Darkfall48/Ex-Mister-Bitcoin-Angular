//? Libraries
import { Component, Input } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { MarketPrice, Value } from 'src/app/models/graph.model';
import { BitcoinService } from 'src/app/services/bitcoin.service';

@Component({
  selector: 'line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent {
  constructor(private bitcoinService: BitcoinService) {}

  @Input() prices!: MarketPrice;

  async ngOnInit() {
    const pricesValues = this.prices.values.splice(
      this.prices.values.length - 30
    );
    var marketPrice = new Chart('market-price', {
      type: 'line',
      data: {
        labels: this.getDates(pricesValues),
        datasets: [
          {
            label: 'Market Price last 30 days',
            data: this.getData(pricesValues),
            backgroundColor: 'gold',
            tension: 0.1,
          },
        ],
      },
    });
  }

  getDates(values: Value[]) {
    return values.map((value) => {
      const date = new Date(value.x * 1000);
      return date.getMonth() + 1 + '.' + (date.getDate() + 1);
    });
  }
  getData(values: Value[]) {
    return values.map((value) => value.y);
  }
}
