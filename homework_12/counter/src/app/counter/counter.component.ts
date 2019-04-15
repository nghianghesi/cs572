import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  @Input() value : number;
  @Output() onValueChanged = new EventEmitter<number>();
  constructor() {
    this.value=0;
   }

  ngOnInit() {
  }

  increase(): boolean  {
    this.value += 1;
    this.onValueChanged.emit(this.value);
    return false;
  }  
  
  decrease(): boolean  {
    this.value -= 1;
    this.onValueChanged.emit(this.value);
    return false;
  }
}
