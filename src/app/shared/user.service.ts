import { Injectable } from '@angular/core';
import { User } from '../shared/User';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  userListRef: AngularFireList<any>;
  userRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  // Create
  createUser(apt: User) {
    return this.userListRef.push({
      name: apt.name,
      email: apt.email,
      country: apt.country
    })
  }

  // Get Single
  getUser(id: string) {
    this.userRef = this.db.object('/users/' + id);
    return this.userRef;
  }

  // Get List
  getUserList() {
    this.userListRef = this.db.list('/users');
    return this.userListRef;
  }

  // Update
  updateUser(id, apt: User) {
    return this.userRef.update({
      name: apt.name,
      email: apt.email,
      country: apt.country
    })
  }

  // Delete
  deleteUser(id: string) {
    this.userRef = this.db.object('/users/' + id);
    this.userRef.remove();
  }
}