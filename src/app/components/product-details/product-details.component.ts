import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from './../../services/products.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  productId: any;
  user: any;
  constructor(private productsService: ProductsService, private activatedRoute: ActivatedRoute ,private router:Router) {
    this.productId = this.activatedRoute.snapshot.params['id']
    this.productsService.getUserById(this.productId).subscribe((res) => {
      this.user = res
    })
  }
  goToUsers() {
    // this.router.navigate(['users'])
    this.router.navigate(['productdash'])
  }
}
