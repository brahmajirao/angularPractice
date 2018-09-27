import {Component} from '@angular/core'
import { AuthorsService } from './authors.service';

@Component({ 
    selector:'authours', 
    template:`
    <h2>{{getTitle()}}</h2>
    <span>Filter: </span><input [(ngModel)]="searchStr" (keyup.enter)="onKeyUp()" />
    <span *ngFor="let author of authors" style="display:block"><input type="checkbox"/> {{author}}</span>
    
    <table>
        <tr>
            <td [attr.colspan] = "colSpan">
                <button [style.backgroundColor] = "isActive? 'blue': 'white' ">Follow</button>
            </td>
        </tr>
    </table>
    `
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