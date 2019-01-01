import { Component, OnInit } from '@angular/core';
import { MyservService } from './../myserv.service';

@Component({
  selector: 'app-newcmp',
  templateUrl: './newcmp.component.html',
  styleUrls: ['./newcmp.component.css']
})
export class NewcmpComponent implements OnInit {

  ndate;
  newcomponentproperty;
    constructor(private myserv: MyservService) { }

    ngOnInit() {
    this.ndate = this.myserv.showTodayDate();
    this.newcomponentproperty = this.myserv.serviceproperty;
  }

}