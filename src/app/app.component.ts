import { Component } from '@angular/core';
import arrayWords from "../utils/words"
import countries from "../utils/countries"


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'word-generator';

  words = '';
  limit = 10;
  
  handleSlideChange(event: Event){
    let newLimit = parseInt((event.target as HTMLInputElement).value);
    this.limit = newLimit;
  }

  generate(){
    this.words = arrayWords.slice(0,this.limit).join(" ");
  }
  
  generateCountries(){
    this.words = countries.slice(0,this.limit).join(" ");
  }

}
