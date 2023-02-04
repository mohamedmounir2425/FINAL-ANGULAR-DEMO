import { ActivatedRoute, Router } from '@angular/router';
import { ProductsListService } from './../../services/products-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  // @Input() productList: Iproduct[] = []

  productsCount: number = 0;
  getNumber(e:number) {
    this.productsCount += e

  }


  products: any;
  constructor(private productsList: ProductsListService ,private activatedRoute : ActivatedRoute ,private router:Router) {

    // hatha mn el api **********
  }
  ngOnInit(): void {
    this.productsList.getAllProducts().subscribe((res) => {

      this.products = res;
    })
  }

  // send counter to app
  // @Output() EventProducts = new EventEmitter()

//   sendCounter() {

//     // this.EventProducts.emit(this.productsCount)
// }
  goToDash() {
    this.router.navigate(['productform/new'])
}
}
