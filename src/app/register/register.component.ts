

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../_Models/User';
import { UserService } from '../_Services/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  urlImg: string = "assets/image/signup-image.jpg";
  public errors: string = "";
  profileForm = new FormGroup({
    firstname: new FormControl('', [
      Validators.required,
    ]),
    lastname: new FormControl('', [
      Validators.required,
    ]),
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });
  get firstname() {
    return this.profileForm.get('firstname');
  }
  get lastname() {
    return this.profileForm.get('lastname');
  }
  get username() {
    return this.profileForm.get('username');
  }
  get password() {
    return this.profileForm.get('password');
  }
  constructor(private UserService: UserService, private router: Router) { }


  nUser: User = new User(this.firstname?.value, this.lastname?.value, this.username?.value, this.password?.value);
  Submit() {
    this.nUser.fname = this.firstname?.value;
    this.nUser.lname = this.lastname?.value;
    this.nUser.username = this.username?.value;
    this.nUser.password = this.password?.value;
    console.log(this.nUser)
    this.UserService.register(this.nUser).subscribe(
      d => {
        console.log(d)
        this.router.navigateByUrl('/home')
      },
      err => this.errors = 'Could not authenticate'
    )
  }
  ngOnInit(): void {
  }

}
