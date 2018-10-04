import {Component} from '@angular/core'
import { AuthorsService } from '../authors.service';

@Component({ 
    selector:'authors', 
    templateUrl:"./authors.component.html"
})
export class AuthorsComponent{
    title="list of Authors";
    authors;
    colSpan = 2;
    isActive = false;
    searchStr = "All Authors"
    constructor(service:AuthorsService){
        this.authors = service.getAuthors()
    }
    getTitle(){
        return this.title
    }
    onKeyUp(){
        alert(this.searchStr)
    }
}