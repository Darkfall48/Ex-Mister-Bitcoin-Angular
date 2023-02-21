//? Libraries
import { Component } from '@angular/core';
//? Models
import { User } from 'src/app/models/user.model';
//? Services
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(
    private userService: UserService,
    private bitcoinService: BitcoinService
  ) {}
  balance!: number;
  rate!: number;

  async ngOnInit() {
    try {
      this.balance = this.userService.getUser().coins;
      this.rate = await this.bitcoinService.getRate();
    } catch (err) {
      console.log(err);
    }
  }

  bitcoinToDollar() {
    return (this.balance / this.rate).toFixed(2);
  }
}
