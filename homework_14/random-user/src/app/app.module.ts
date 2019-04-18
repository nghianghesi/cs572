import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { OnlineDataService } from './services/online-data.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UsersModule
  ],
  providers: [HttpClient, OnlineDataService],
  bootstrap: [AppComponent]
})
export class AppModule {   
}
