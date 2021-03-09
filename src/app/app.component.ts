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

  userModel = new User('','faarid@gmail.com', parseInt('023282'), '','morning',true);
}
