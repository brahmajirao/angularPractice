import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { catchError } from 'rxjs/internal/operators';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http:HttpClient) { }

  getPosts(){
    return this.http.get(this.url);
  }

  createPost(postData){
    return this.http.post(this.url, JSON.stringify(postData)).pipe(catchError((error:Response) => {
      if(error.status === 400) {
        return Observable.throw(new BadInput(error.json()))
      }
      return Observable.throw(new AppError(error.json()));
    }) as any);
  }

  updatePost(postData){
    console.log(postData);
    return this.http.put(this.url+'/'+postData['id'],postData);
  }

  deletePost(id){
    id = 409;
    return this.http.delete(this.url+'/'+id).pipe(catchError((error:Response)=>{
      if(error.status===404){
        return throwError(new NotFoundError());
      }
        return throwError(new AppError(error));
        
    }) as any);
  }
}
