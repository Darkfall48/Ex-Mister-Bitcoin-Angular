//? Libraries
import { Component, EventEmitter, Input, Output } from '@angular/core';
//? Models
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss'],
})
export class ContactPreviewComponent {
  constructor(private contactService: ContactService) {}

  @Input() contact!: Contact;

  onDeleteContact() {
    this.contactService.deleteContact(this.contact._id as string);
  }
}
