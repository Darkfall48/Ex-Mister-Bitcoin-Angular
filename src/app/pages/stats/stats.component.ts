//? Libraries
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
//? Models
import { Contact } from 'src/app/models/contact.model';
//? Services
import { ContactService } from 'src/app/services/contact.service';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { MarketPrice } from 'src/app/models/graph.model';

@Component({
  selector: 'stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
})
export class StatsComponent {
  constructor(private bitcoinService: BitcoinService) {}

  prices$!: Observable<MarketPrice>;

  ngOnInit(): void {
    this.prices$ = this.bitcoinService.getPriceHistory();
  }
}
