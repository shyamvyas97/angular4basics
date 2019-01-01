import { Component } from '@angular/core';
import { MyservService } from './myserv.service';
import { toDate } from '@angular/common/src/i18n/format_date';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular 4';
  ndate;
  componentproperty;
   constructor(private myserv: MyservService) {}
   ngOnInit() {
      this.ndate = this.myserv.showTodayDate();
      console.log(this.myserv.serviceproperty);
      this.myserv.serviceproperty = "component created"; // value is changed.
      this.componentproperty = this.myserv.serviceproperty;
   }
  todaydate = new Date();
  jsonval = {name:'qwer', age:'20', address:{a1:'Mumbai', a2:'Karnataka'}};
  months = ["January", "Feburary", "March", "April", "May", 
  "June", "July", "August", "September",
  "October", "November", "December"];
  
  isavailable = true;

  myClickFunction(event) {
    alert("button clicked");
    console.log(event);
  }

  changemonths(event) {
    console.log("changed month from dropdown");
    
  }
}
