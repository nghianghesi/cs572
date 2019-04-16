import { Directive, Input, HostListener, ElementRef, HostBinding, OnInit } from '@angular/core';

@Directive({
  selector: '[appMakeBigger]'
})
export class MakeBiggerDirective implements OnInit{
  ngOnInit(): void {
    this.fontsize = ""+this.initSize+"px";
    this.currentSize = parseInt(this.initSize);
  }


  @Input("appMakeBigger") increasingValue:string;
  constructor(private element:ElementRef) { }

  @HostBinding('style.font-size')
  fontsize: string = "";
  private currentSize:number;

  @Input() initSize:string;

  @HostListener('dblclick') increaseSize(){
    this.currentSize+=parseInt(this.increasingValue);
    this.fontsize = ""+ this.currentSize+"px";
  };
}
