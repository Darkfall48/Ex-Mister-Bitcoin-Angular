//? Libraries
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  checkLoggedIn() {
    return of(true);
  }
}
