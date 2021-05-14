import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blog } from '../_Models/Blog';
import { UserService } from './user.service';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { Comment } from '../_Models/comment';
@Injectable({
  providedIn: 'root'
})
export class BlogService {
  public token: any = localStorage.getItem('access_token');

  add(nblog: FormData) {
    return this.http.post<Blog>("http://localhost:3000/blogs/add", nblog, { headers: { authorization: this.token } });

  }
  getAll() {
    return this.http.get<Blog[]>("http://localhost:3000/blogs/home")

  }
  constructor(private http: HttpClient , private u: UserService) {

   }
   flag: boolean = false;
}
