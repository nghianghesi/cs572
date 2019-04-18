import { Component, OnInit, Input, Output,EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  private _value : number;
  @Output() valueChange = new EventEmitter<number>();
  @ViewChild('i')in;
  constructor() {
    this.value=0;
   }

  ngOnInit() {

  }

  increase(): boolean  {
    this.value += 1;
    this.valueChange.emit(this.value);
    return false;
  }  
  
  decrease(): boolean  {
    this.value -= 1;
    this.valueChange.emit(this.value);
    return false;
  }

  @Input() get value():number{
     return this._value;
  }

  set value(val) {
    this._value = val;
    this.valueChange.emit(this.value);
  }
}
