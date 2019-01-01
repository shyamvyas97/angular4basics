import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyservService {
  serviceproperty = "Service Created";
  constructor() { }
  
  // ES6 Arrow Function(Without Parameters)  const a = () => {}
  
  // ES6 Arrow Function(With Parameters)  var timesTwo = params => params * 2
  // timesTwo(4);  o/p:- 8

  showTodayDate = () => {
    let ndate = new Date();
    return ndate;
  }
}