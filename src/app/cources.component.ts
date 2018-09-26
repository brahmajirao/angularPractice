import {Component} from '@angular/core'
import { CoursesService } from './courses.service';

@Component({ 
    selector:'courses', 
    template:`
    <h2>{{getTitle()}}</h2>
    <span style="display:block" *ngFor="let course of courses"><input type="checkbox"/> {{course}}</span>
    <button class="btn btn-primary" [class.active] = "isActive" (click) = "enrollToCourse($event)">Enroll</button>
    `
})
export class CoursesComponent{
    title="list of courses";
    courses;
    isActive = true;
    constructor(service:CoursesService){
        this.courses = service.getCources()
    }
    getTitle(){
        return this.title
    }
    enrollToCourse($event){
        console.log('Enrolled to the Courses successfully ',$event);
    }
}