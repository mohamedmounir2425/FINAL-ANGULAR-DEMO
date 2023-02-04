import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  baseUrl:any = "http://localhost:3002/login"
  constructor(private client:HttpClient) {
   }
   getAllUsers(){

    return this.client.get(this.baseUrl)

   }
   getUserById(userId:any){
    return this.client.get(`${this.baseUrl}/${userId}`)
   }
   getAdmin(){
    return this.client.get(`${this.baseUrl}/1`)
   }
   addUser(user:any){
    return this.client.post(this.baseUrl,user)
   }
   editeUser(userId:any,user:any){
    return this.client.put(`${this.baseUrl}/${userId}`,user)
   }
   deleteUser(userId:any){
    return this.client.delete(`${this.baseUrl}/${userId}`)
   }


}
