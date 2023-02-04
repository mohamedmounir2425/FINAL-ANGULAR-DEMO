import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsListService {
  baseUrl:any = "http://localhost:3002/products"
  constructor(private client: HttpClient) {

  }
  getAllProducts(){

    return this.client.get(this.baseUrl)

  }
  addProduct(user:any){
    return this.client.post(this.baseUrl,user)
   }
}
