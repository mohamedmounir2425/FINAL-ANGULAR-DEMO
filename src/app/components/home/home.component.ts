import { CounterService } from './../../services/counter.service';
import { BehaviorSubject } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data!: number;
  constructor( private counter:CounterService) { }

  ngOnInit(): void {
    this.counter.data$.subscribe(res => this.data = res)
  }


  // changeData(data: number) {
  //   console.log(this.data.next(data))
  // }
  newData() {
    // this.counter.changeData(this.data);
    this.counter.increase();

  }

}
