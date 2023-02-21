//? Libraries
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
//? Models
import { Contact } from 'src/app/models/contact.model';
//? Services
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
})
export class StatsComponent {}
