import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private url = 'http://1jsonplaceholder.typicode.com/posts';

  constructor(private http:HttpClient) { }

  getPosts(){
    return this.http.get(this.url);
  }

  createPost(postData){
    return this.http.post(this.url, JSON.stringify(postData));
  }

  updatePost(postData){
    console.log(postData);
    return this.http.put(this.url+'/'+postData['id'],postData);
  }

  deletePost(id){
    return this.http.delete(this.url+'/'+id);
  }
}
