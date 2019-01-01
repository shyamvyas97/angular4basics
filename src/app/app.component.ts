import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular 4';
  
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