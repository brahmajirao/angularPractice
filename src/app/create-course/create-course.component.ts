import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent {
    categories = [
      {id:1, name:"Development"},
      {id:2, name:"Testing"},
      {id:3, name:"Other"}
    ];
}
