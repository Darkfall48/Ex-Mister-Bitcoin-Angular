//? Libraries
import { Component, EventEmitter, Input, Output } from '@angular/core';
//? Models
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss'],
})
export class ContactPreviewComponent {
  @Input() contact!: Contact;
}
