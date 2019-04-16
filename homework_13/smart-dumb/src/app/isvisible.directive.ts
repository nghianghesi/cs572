import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appIsvisible]'
})
export class IsvisibleDirective {
  private _isvisible: boolean;

  @Input('appIsvisible')
  public get isvisible(): boolean {
    return this._isvisible;
  }
  public set isvisible(value: boolean) {
    this._isvisible = value;
    if(!this.isvisible){
      this.element.nativeElement.style.visibility = 'hidden';
    }else{
      this.element.nativeElement.style.visibility = 'visible';
    }    
  }

  constructor(private element:ElementRef, private render2: Renderer2) { 
  }

}
