import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom, Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss'],
})
export class ContactEditComponent {
  constructor(
    private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  contact!: Contact;
  subscription!: Subscription;

  ngOnInit() {
    // this.subscription = this.route.data.subscribe((data) => {
    //   console.log('data :>> ', data);
    //   this.contact = data['contact'];
    // });

    this.subscription = this.route.data.subscribe(({ contact }) => {
      this.contact =
        contact || (this.contactService.getEmptyContact() as Contact);
    });

    console.log('contact :>> ', this.contact);
  }

  async onAddContact() {
    try {
      await lastValueFrom(this.contactService.saveContact(this.contact));
      this.goBack();
    } catch (err) {
      console.log('err:', err);
    }
  }

  goBack() {
    this.location.back();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
