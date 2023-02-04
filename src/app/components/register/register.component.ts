import { UserService } from './../../services/user.service';
import { Component ,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  id:any;
  constructor(private userService:UserService ,private activatedRoute:ActivatedRoute  ,private router:Router){
    this.id = this.activatedRoute.snapshot.params['id']
    console.log(this.id)
  }
  registerForm!: FormGroup

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      'first_name': new FormControl(null, [Validators.required,Validators.minLength(3),Validators.maxLength(15)]),
      'last_name': new FormControl(null, [Validators.required,Validators.minLength(3),Validators.maxLength(15)]),
      'email': new FormControl(null,[Validators.email,Validators.required]),
      'password':new FormControl(null,[Validators.required,Validators.maxLength(20),Validators.minLength(3)])
    })
  }


  getFname()
  {
    return this.registerForm.controls['first_name']
  }
  getlname()
  {
    return this.registerForm.controls['last_name']
  }
  getEmail()
  {
    return this.registerForm.controls['email']
  }
  getPassword()
  {
    return this.registerForm.controls['password']
  }

  flag: boolean = false
  // registerObj: object;
  register(registerForm: any) {

    if (registerForm.status == 'VALID') {

      this.userService.addUser(registerForm.value).subscribe((response) => {
        // this.registerObj = response
        console.log(response);
        this.router.navigate([`/login`])
        this.flag = true
      })


    }
  }
}
