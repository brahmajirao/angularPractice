import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})
export class ContactformComponent {
  
  contactMethods=[
    {id:"1", name:"Email"},
    {id:"2", name:"Phone"}
  ];
  
  log(field){
    console.log(field);
  }
  onSubmit(f){
    console.log(f);
  }
}
