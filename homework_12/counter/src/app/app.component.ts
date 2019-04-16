import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'counter';
  @Input() countervalue = 10;
  updateCounterValue(value:number) : void{
    this.countervalue = value;
    //console.log(`couter updated ${value}`);
  }
}
