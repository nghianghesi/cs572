import { Injectable } from '@angular/core';
import { OnlineDataService } from '../services/online-data.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _users:any[] = [];
  constructor(private onlinedata: OnlineDataService) { 
    this.updateData();
    onlinedata.subscribe(()=>{
      console.log('data changed');
      this.updateData();
    });
  }  

  private updateData():void{
    let data:string = this.onlinedata.getCachedData();
    if(data!=null && data > ''){
      this._users = JSON.parse(data);
    }else{
      this._users = [];
    }
  }

  getUsers():any[] {
    return this._users;
  }

  getUserByUUId(uuid:string):any{
    let filterArr = this._users.filter(u=>u.login.uuid == uuid);
    if(filterArr.length > 0){
      return filterArr[0];
    }else{
      return {};
    }
  }
}
