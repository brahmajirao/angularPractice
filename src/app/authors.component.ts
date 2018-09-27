import {Component} from '@angular/core'
import { AuthorsService } from './authors.service';

@Component({ 
    selector:'authours', 
    template:`
    <h2>{{getTitle()}}</h2>
    <span>Filter: </span><input type="text" #searchValue (keyup.enter)="onKeyUp(searchValue.value)" />
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
    constructor(service:AuthorsService){
        this.authors = service.getAuthors()
    }
    getTitle(){
        return this.title
    }
    onKeyUp(searchStr){
        alert(searchStr)
    }
}