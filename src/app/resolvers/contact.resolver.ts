//? Libraries
import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { delay, Observable, of } from 'rxjs';
//? Models
import { Contact } from '../models/contact.model';
//? Services
import { ContactService } from '../services/contact.service';

@Injectable({
  providedIn: 'root',
})
export class ContactResolver implements Resolve<Contact> {
  constructor(private contactService: ContactService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Contact> {
    const id = route.params['id'];
    console.log('id :>> ', id);
    return this.contactService.getContactById(id).pipe(delay(100));
  }
}
