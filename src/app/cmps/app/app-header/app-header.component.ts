//? Libraries
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
//? Models
import { User } from 'src/app/models/user.model';
//? Services
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
})
export class AppHeaderComponent {
  constructor(
    private userService: UserService,
    private bitcoinService: BitcoinService
  ) {}

  user!: User;
  rate!: number;

  async ngOnInit() {
    try {
      this.rate = await this.bitcoinService.getRate();
      this.user = this.userService.getUser();
    } catch (err) {
      console.log(err);
    }
  }
}
