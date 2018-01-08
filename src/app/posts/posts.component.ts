import { Component, OnInit } from '@angular/core';
import { PostService } from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  private posts = [];
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getAllPosts().subscribe(
      (res) => {
        console.log(res);
        this.posts = res;
      },
      (error) => {
        console.log("Error in component ts");
      }
    ); 
  }



}
