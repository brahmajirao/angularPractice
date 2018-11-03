import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { catchError } from 'rxjs/internal/operators';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';
import { throwError } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //private url;

  constructor(private url:string, private http:HttpClient) { }

  getAll(){
    return this.http.get(this.url).pipe(map(response=>response));
  }

  create(resource){
    return this.http.post(this.url, JSON.stringify(resource)).pipe(catchError(this.handleError) as any);
  }

  update(resource){
    return this.http.put(this.url+'/'+resource['id'],resource).pipe(catchError(this.handleError));
  }

  delete(id){
    return this.http.delete(this.url+'/'+id).pipe(catchError(this.handleError) as any);
  }

  private handleError(error:Response){
    if(error.status===404){
      return throwError(new NotFoundError());
    }
    if(error.status === 400) {
      return Observable.throw(new BadInput(error.json()))
    }
    return throwError(new AppError(error));
  }
}
