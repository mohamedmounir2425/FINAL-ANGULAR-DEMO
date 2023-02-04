import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from './../../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from './../../services/login.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
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

        if (registerForm.value.email == 'admin@admin' && registerForm.value.password == 'admin') {

          this.router.navigate(['/productdash'])
        }



        this.flag = true
      })


    }
  }

}
