//? Libraries
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom, Subscription } from 'rxjs';
//? Models
import { Contact } from 'src/app/models/contact.model';
//? Services
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss'],
})
export class ContactDetailsComponent implements OnInit {
  constructor(
    private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  contact!: Contact;
  subscription!: Subscription;

  async ngOnInit() {
    this.subscription = this.route.data.subscribe((data) => {
      console.log('data :>> ', data);
      this.contact = data['contact'];
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
