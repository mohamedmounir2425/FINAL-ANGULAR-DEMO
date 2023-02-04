import { LoginService } from './../../services/login.service';
import { CounterService } from './../../services/counter.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  data:any;

  constructor(private counter: CounterService, private router: Router) {

   }

   logoutFlag: boolean = false;
  ngOnInit() {
    this.counter.data$.subscribe(res => this.data = Number(res))  //read the invoked data or default data
    if (this.router.url == '/login') {
      this.logoutFlag =true
    } else if (this.router.url == '/home' || this.router.url == '/products') {
      this.logoutFlag =false

    }
    // this.data  = this.counter.mano
  }
  goToLogin() {
    this.router.navigate(['login'])
  }


}
