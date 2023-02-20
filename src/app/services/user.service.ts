import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  private user: User = {
    _id: 'u101',
    name: 'Sidney Sebban',
    coins: 100,
    moves: [],
  };

  public getUser() {
    return this.user;
  }
}
