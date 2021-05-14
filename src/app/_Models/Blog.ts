import { Comment } from './comment';

export class Blog {
  constructor(
    public title: string,
    public blog_body: string,
    public tags?: string[],
    public photo?: string,
    public createdAt?: Date,
    public _id?: string,
    public comments?: Comment[],
    public likes_count?: number,
    public auther?: string
  ) {}
}










