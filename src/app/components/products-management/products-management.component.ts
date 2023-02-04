import { ProductsService } from './../../services/products.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-management',
  templateUrl: './products-management.component.html',
  styleUrls: ['./products-management.component.scss']
})
export class ProductsManagementComponent {
  productForm = new FormGroup({
    img:new FormControl('',[Validators.required]),
    name:new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z]{3,15}$/)]),
    price:new FormControl('',[Validators.required,Validators.pattern(/^[0-9]{1,4}$/)]),
    quantity:new FormControl('',[Validators.required,Validators.pattern(/^[0-9]{1,4}$/)]),
    desc:new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z ]{5,30}$/)]),

  })

  get getImg(){
    return this.productForm.controls['img']
  }
  get getName(){
    return this.productForm.controls['name']
  }
  get getPrice(){
    return this.productForm.controls['price']
  }
  get getQuantity(){
    return this.productForm.controls['quantity']
  }
  get getDesc(){
    return this.productForm.controls['desc']
  }

  pageId: any;

  constructor(private router: Router, private productService: ProductsService, private activatedRoute: ActivatedRoute) {
    this.pageId = this.activatedRoute.snapshot.params['id']
  }

  login() {
    if (this.productForm.status == 'VALID') {

      if (this.pageId) {
        this.productService.editeUser(this.pageId,this.productForm.value).subscribe((res) => {
          console.log(res)
        })
        console.log("edite user .........")
        this.router.navigate(['productdash'])
      } else {
        this.productService.addUser(this.productForm.value).subscribe((res) => {
          console.log(res)

        })
        this.router.navigate(['productdash'])
        console.log("add..........")

      }

    } else {
      console.log("Error///")
    }


    // console.log(this.getName.errors)
    // console.log(this.getEmail.errors)
    // console.log(this.getPassword.errors)
    // console.log(this.productForm)
  }

  productId:any = this.activatedRoute.snapshot.params['id']

}
