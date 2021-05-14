import { Component, OnInit } from '@angular/core';
import { Blog } from '../_Models/Blog';
import { BlogService } from '../_Services/blog.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  blogs: Blog[] = [];
  img = "assets/image/blogBG1.jpg";
  constructor(public BlogService: BlogService) { }

  ngOnInit(): void {
    this.BlogService.getAll().subscribe(
      d => this.blogs = d
    )
  }

}




