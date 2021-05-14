import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../_Models/Blog';
import { User } from '../_Models/User';
import { BlogService } from '../_Services/blog.service';
import { UserService } from '../_Services/user.service';


@Component({
  selector: 'app-createblog',
  templateUrl: './createblog.component.html',
  styleUrls: ['./createblog.component.css']
})
export class CreateblogComponent implements OnInit {
 nblog: Blog = new Blog(" ", " ",[""], "");
  selectedFile!: File;
  addForm!: FormGroup;
  username: any;
  Blog = new FormData();
  user: User = new User("", "", "", "");
  userId: any;




  constructor(public BlogService: BlogService, public ar: ActivatedRoute, public route: Router, public UserService: UserService, public fb: FormBuilder) {
    this.UserService.getUser().subscribe(
      a => {
        this.user = a
        this.userId = a._id;
      }
    )
    this.addForm = this.fb.group({
      title: [''],
     blog_body: [''],
      tags: [''],

    })

  }

  onselect(event: any) {
    const filelist: FileList = event.target.files;
    this.selectedFile = filelist[0];

  }

  save() {
    this.Blog.append('title', this.nblog.title)
    this.Blog.append('blog_body', this.nblog.blog_body)
    this.Blog.append('photo', this.selectedFile);

    this.BlogService.add(this.Blog).subscribe(
      a => {
        console.log(this.selectedFile)
        console.log(a)
        console.log(a.photo)

        console.log("hello"+this.Blog)
      }
    )
    this.route.navigate(["/blog/list"]);
  }






  ngOnInit(): void {
    this.UserService.getUser().subscribe(
      a => {
        this.user = a

      }
    )
  }

}
