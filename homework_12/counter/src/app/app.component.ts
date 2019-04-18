import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'counter';
  @Input() _countervalue = 10;
  get countervalue(){
    return this._countervalue;
  }
  set countervalue(value){
    this._countervalue = value;
  }
  updateCounterValue(value:number) : void{
    this.countervalue = value;
    //console.log(`couter updated ${value}`);
  }
}
