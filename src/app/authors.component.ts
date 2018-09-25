import {Component} from '@angular/core'
import { AuthorsService } from './authors.service';

@Component({ 
    selector:'authours', 
    template:`
    <h2>{{getTitle()}}</h2>
    <ul>
        <li *ngFor="let author of authors">{{author}}</li>
    </ul>
    <img src="{{imageUrl}}"/>
    <table>
        <tr>
            <td [attr.colspan] = "colSpan">asdf</td>
        </tr>
    </table>
    `
})
export class AuthorsComponent{
    title="list of Authors";
    imageUrl = "http://lorempixel.com/400/200";
    authors;
    colSpan = 2;
    constructor(service:AuthorsService){
        this.authors = service.getAuthors()
    }
    getTitle(){
        return this.title
    }
}