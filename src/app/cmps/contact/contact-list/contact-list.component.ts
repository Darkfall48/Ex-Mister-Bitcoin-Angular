//? Libraries
import { Component, EventEmitter, Input, Output } from '@angular/core';
//? Models
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent {
  @Input() contacts!: Contact[] | null;
  @Output() selectContact = new EventEmitter<string>();
}
