import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from './../../services/products.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-p-details',
  templateUrl: './p-details.component.html',
  styleUrls: ['./p-details.component.scss']
})
export class PDetailsComponent {
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
    this.router.navigate(['products'])
  }
}
