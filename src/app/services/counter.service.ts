import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor() { }

  changeData(data: number) {
  }
  mano: number = 0;
  private data = new BehaviorSubject(0);
  data$ = this.data.asObservable();

  // private logoutData = new BehaviorSubject(false);
  // logoutFlag = this.logoutData.asObservable();

  increase() {
    if (this.mano >= 0) {
      this.mano += 1
      this.data.next(this.mano)
    }
  }
  decrease() {
    if (this.mano > 0) {
      this.mano -= 1
      this.data.next(this.mano)
    }
  }
  

}
