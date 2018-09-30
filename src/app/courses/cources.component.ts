import {Component} from '@angular/core'
import { CoursesService } from '../courses.service';
import { FavoriteChangedEventArgs } from '../favorite/favorite.component';

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
        console.log(this.courses);
    }
    getTitle(){
        return this.title
    }
    enrollToCourse($event){
        console.log('Enrolled to the Courses successfully ',$event);
    }
    onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
        console.log('changed', eventArgs);
    }
}