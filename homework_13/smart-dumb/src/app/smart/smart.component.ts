import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smart',
  templateUrl: './smart.component.html',
  styleUrls: ['./smart.component.css']
})
export class SmartComponent implements OnInit {

  public students:any[];
  constructor() { 
    this.students = [
      {name: 'Anh Nghia Nguyen', course:'cs572', professor:'Asaad Saad', grade:85, finished:false},
      {name: 'Anh Nghia Nguyen', course:'cs402', professor:'Bruce Lester', grade:90, finished:true},
      {name: 'Anh Nghia Nguyen', course:'cs452', professor:'Rene DeJong', grade:90, finished:true}
    ]
  }

  ngOnInit() {
  }

}
