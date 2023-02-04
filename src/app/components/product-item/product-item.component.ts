import { Router } from '@angular/router';
import { CounterService } from './../../services/counter.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit{
  flag: boolean =false;
  constructor( private counter:CounterService ,private router:Router) { }
  ngOnInit(): void {
    // this.myEvent.emit(this.counter)
    this.counter.data$.subscribe(res => this.data = res)

  }
  data!: number;
  // counter: number = 0;

  @Input() product: any;
  // @Output() myEvent = new EventEmitter()
  // count() {
  //   // this.counter += 1
  //   this.myEvent.emit(1)
  // }
  numFlag: number = 0;

  increaseCart() {
    // this.counter.changeData(this.data);
    this.counter.increase();

      this.numFlag +=1
      this.flag = true


  }
  decreaseCart() {
    // this.counter.changeData(this.data);
    this.counter.decrease();
    if (this.numFlag <= 1) {
      this.flag = false

    } else{

      this.numFlag -= 1
    }
  }
  goToDetails() {
    this.router.navigate([`pdetail/${this.product.id}`])
  }

}
