import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent{

  form = new FormGroup({
    'topics': new FormArray([])
  });

  addTopic(topic: HTMLInputElement){
    this.getTopics.push(new FormControl(topic.value))
    topic.value='';

  }

  get getTopics(){
    return this.form.get('topics') as FormArray
  }

  removeTopic(topic: FormControl){
    let index = this.getTopics.controls.indexOf(topic);
    this.getTopics.removeAt(index);
  }

}
