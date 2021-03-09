import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tdf-forms';
  topics = ['Angular', 'React','Node', 'Android'];
  topicHasError = true;
  userModel = new User('Faarid','faarid@gmail.com', parseInt('1231231231'), 'default','morning',true);

  validateTopic(value:any){
    if(value==='default'){
      this.topicHasError=true;
    }else{
      this.topicHasError=false;
    }
  }
}
