
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../_Models/User';
import { UserService } from '../_Services/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

     public errors: string = "";
  profileForm = new FormGroup({
    username: new FormControl('',[
      Validators.required ,
      Validators.minLength(8),
    ]),
    password: new FormControl('',[
      Validators.required ,
      Validators.minLength(8),
    ]),
  });
  constructor(private UserService: UserService, private router: Router) { }
  urlImg: string = "assets/image/signin-image.jpg";

  get username(){
     return this.profileForm.get('username') ;
  }
  get password(){
    return this.profileForm.get('password') ;
  }
  public onSubmit() {
    console.log(this.profileForm.value);
    console.log(this.profileForm.get('username'))
    console.log(this.username?.value)
    this.UserService.login(this.username?.value, this.password?.value )
      .subscribe(
        result => {
          this.UserService.token = result.token;
          localStorage.setItem('access_token', result.token!)
          localStorage.setItem('access_id', result._id!);
          localStorage.setItem('access_name', result.username)
          this.router.navigate(['/blog'])
          console.log(result)
        },
        err => this.errors = 'Could not authenticate'
      );

  }

  ngOnInit(): void {

  }

}
