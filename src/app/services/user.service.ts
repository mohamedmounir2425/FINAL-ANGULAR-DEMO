import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userData } from './userData';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  currentUser = new BehaviorSubject(null);
  baseUrl: any = 'http://localhost:3002/users';
  constructor(private client: HttpClient) {}
  getAllUsers() {
    return this.client.get(this.baseUrl);
  }
  getUserById(userId: any) {
    return this.client.get(`${this.baseUrl}/${userId}`);
  }
  addUser(user: any) {
    return this.client.post(this.baseUrl, user);
  }
  editeUser(userId: any, user: any) {
    return this.client.put(`${this.baseUrl}/${userId}`, user);
  }
  deleteUser(userId: any) {
    return this.client.delete(`${this.baseUrl}/${userId}`);
  }

  saveCurrentUser(email: string, password: string) {
    let user: any = new userData(email, password);
    this.currentUser.next(user);
  }
  removeCurrentUser() {
    this.currentUser.next(null);
  }
  // logout(email: string, password: string) {
  //   let user1: any = new userData(email, password);
  //   this.currentUser.next(user1);
  // }
}
