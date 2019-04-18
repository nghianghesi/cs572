import { Component } from '@angular/core';
import { OnlineDataService } from './services/online-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'random-user';

  
  constructor(private onlinedata: OnlineDataService){
    onlinedata.getOnlineData();
  }

  public clearData():void{
    this.onlinedata.clearData();
  }

  public loadData():void{
    this.onlinedata.getOnlineData();
  }
}
