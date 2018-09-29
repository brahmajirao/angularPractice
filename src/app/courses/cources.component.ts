import {Component} from '@angular/core'
import { CoursesService } from '../courses.service';

@Component({ 
    selector:'courses', 
    templateUrl: './courses.component.html'
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