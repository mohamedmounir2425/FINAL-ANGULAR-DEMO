import { userData } from './../../services/userData';
import { LoginService } from './../../services/login.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  id:string ;
  constructor(private loginService:LoginService ,private activatedRoute:ActivatedRoute  ,private router:Router ,private _UserService:UserService){
    this.id = this.activatedRoute.snapshot.params['id']

  }

  registerForm!: FormGroup
  pageFlag!: boolean;

  ngOnInit(): void {
    this.registerForm = new FormGroup({

      'email': new FormControl(null,[Validators.email,Validators.required]),
      'password':new FormControl(null,[Validators.required,Validators.maxLength(20),Validators.minLength(3)])
    })




  }



  getEmail()
  {
    return this.registerForm.controls['email']
  }
  getPassword()
  {
    return this.registerForm.controls['password']
  }

  flag:boolean = false
  adminFlag: boolean = false


  login(registerForm: any) {
    if (registerForm.status == 'VALID') {
      // console.log(registerForm.message)
      this.loginService.addUser(registerForm.value).subscribe((response) => {
        this.loginService.getAdmin().subscribe(res => {

        })
        this._UserService.saveCurrentUser(registerForm.value.email,registerForm.value.password)
        console.log(this._UserService.currentUser)

        this.router.navigate(['/home'])
        this.flag = true
      })


    }
  }

  goToAdmin() {
    this.router.navigate(['admin'])
  }


}
