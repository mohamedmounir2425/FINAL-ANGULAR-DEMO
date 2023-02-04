import { Router } from '@angular/router';
import { ProductsService } from './../../services/products.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-product',
  templateUrl: './dashboard-product.component.html',
  styleUrls: ['./dashboard-product.component.scss']
})
export class DashboardProductComponent {
  constructor(private productsService: ProductsService, private router: Router) { }
  users: any;
  ngOnInit(): void {
    this.productsService.getAllUsers().subscribe((respose) => {
      this.users = respose
    })
  }
  addUser() {
    // this.router.navigate(['login/new'])
    this.router.navigate(['productform/new'])
  }
  removeUser(productId: any) {
    this.productsService.deleteUser(productId).subscribe((res) => {
      console.log(res)
    })
    this.users = this.users.filter((item:any, index:any) => {
      return item.id != productId
    })
  }
  editeUser(productId:any) {
    this.router.navigate([`productform/${productId}`])
  }
  goToDetails(productId:any) {
    this.router.navigate([`productdetail/${productId}`])
  }

}
