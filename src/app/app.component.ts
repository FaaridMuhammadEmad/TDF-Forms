import { Component } from '@angular/core';
import { EnrollmentService } from './enrollment.service';
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
  submitted = false;
  errorMsg='';
  constructor(private _enrollmentService: EnrollmentService){}

  validateTopic(value:any){
    if(value==='default'){
      this.topicHasError=true;
    }else{
      this.topicHasError=false;
    }
  }
  onSubmit(userform:any){
    console.log(userform)
    // this.submitted = true;
    // this._enrollmentService.enroll(this.userModel)
    // .subscribe(
    //   data => console.log("Success!", data),
    //   error => this.errorMsg=error.statusText
    // )
  }
}
