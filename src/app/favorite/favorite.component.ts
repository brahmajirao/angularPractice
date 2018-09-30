import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  @Input() 
  isFavorite: boolean;

  @Output()
  change = new EventEmitter();
  
  imgURL=""

  constructor() {
    
      this.changeImageUrl();
   }

  ngOnInit() {
  }

  onClick(){
    this.isFavorite = !this.isFavorite;
    this.changeImageUrl()
    this.change.emit({newValue: this.isFavorite});
  }

  changeImageUrl() {
    if(this.isFavorite)
        this.imgURL = '../../assets/images/favorite.png';
    else
    this.imgURL = '../../assets/images/notfavorite.png';
  }
}

export interface FavoriteChangedEventArgs{
  newValue: boolean
}
