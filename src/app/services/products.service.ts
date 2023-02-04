import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseUrl:string = 'http://localhost:3002/products'
  constructor(private httpClient: HttpClient) { }

  getAllUsers() {
    return this.httpClient.get(this.baseUrl)
  }
  getUserById(userId:any) {
    return this.httpClient.get(`${this.baseUrl}/${userId}`)
  }
  addUser(user:any) {
    return this.httpClient.post(this.baseUrl,user)
  }
  editeUser(userId:any,user:any) {
    return this.httpClient.put(`${this.baseUrl}/${userId}`,user)
  }
  deleteUser(userId:any) {
    return this.httpClient.delete(`${this.baseUrl}/${userId}`)
  }
}
