import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SmartComponent } from './smart/smart.component';
import { DumbComponent } from './dumb/dumb.component';
import { IsvisibleDirective } from './isvisible.directive';
import { MyprefixPipe } from './myprefix.pipe';
import { MakeBiggerDirective } from './make-bigger.directive';

@NgModule({
  declarations: [
    AppComponent,
    SmartComponent,
    DumbComponent,
    IsvisibleDirective,
    MyprefixPipe,
    MakeBiggerDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
