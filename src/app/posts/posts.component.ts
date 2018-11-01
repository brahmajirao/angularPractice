import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts:any;
  private url = 'http://jsonplaceholder.typicode.com/posts'
  constructor(private service: PostsService) {
    
   }

   createPost(input: HTMLInputElement){
      let postData = {title:input.value};
      this.service.createPost(JSON.stringify(postData))
      .subscribe(response=>{
        postData['id'] = response['id'];
        this.posts.splice(0,0,postData);
        console.log(response);
      }, 
      (error: AppError) => {
        if(error instanceof BadInput){
          //this.form.setErrors(error.originalError)
        } else {
          alert('An unexpected error occured.');
          console.log(error);
        }
      });
   }

   updatePost(postData){
     this.service.updatePost(postData)
     .subscribe(response=>{
       console.log(response);
     }, error=>{
       alert('An unexpected error occured.');
       console.log(error);
     });
   }

   deletePost(postData){
     this.service.deletePost(postData.id)
     .subscribe(response=>{
       let index = this.posts.indexOf(postData);
       this.posts.splice(index,1);
     }, 
     (error: AppError)=> {
       if(error instanceof NotFoundError) {
         alert('This post has already been deleted.');
       } else {
         alert('An unexpected error occurred.');
         console.log(error);
       }
     });
   }

  ngOnInit() {
    this.service.getPosts()
    .subscribe(response => {
      this.posts = response;
    },error => {
      alert('An unexpected error occured.');
      console.log(error);
    });
  }

}
