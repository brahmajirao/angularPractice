import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(private route: ActivatedRoute) { 

  }

  ngOnInit() {
    this.route.paramMap
    .subscribe(params =>{
      let id = params.get('courseId'); 
    });
  }

}
