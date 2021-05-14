import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from '../_Models/Blog';
import { BlogService } from '../_Services/blog.service';
import { UserService } from '../_Services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  search!:string ;
  blog :Blog[] = [];

  constructor(public u: UserService,private s:BlogService,private router:Router) { }
  logout(){
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigateByUrl('/blog/list')
    })
    this.u.logout();

  }

  ngOnInit(): void {
  }

}



