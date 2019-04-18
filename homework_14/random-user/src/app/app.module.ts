import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { OnlineDataService } from './services/online-data.service';
import { LazyloadingUsersModule } from './users/lazyloading-users.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LazyloadingUsersModule
  ],
  providers: [HttpClient, OnlineDataService],
  bootstrap: [AppComponent]
})
export class AppModule {   
}
