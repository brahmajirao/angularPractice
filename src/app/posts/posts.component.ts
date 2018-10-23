import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts:any;
  private url = 'http://jsonplaceholder.typicode.com/posts'
  constructor(private http: HttpClient) {
    http.get(this.url)
    .subscribe(response => {
      this.posts = response;
    });
   }

   createPost(input: HTMLInputElement){
      let postData = {title:input.value};
      this.http.post(this.url, JSON.stringify(postData))
      .subscribe(response=>{
        postData['id'] = response['id'];
        this.posts.splice(0,0,postData);
        console.log(response);
      });
   }

  ngOnInit() {
  }

}
