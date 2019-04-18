import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {EventEmitter} from 'events'

@Injectable({
  providedIn: 'root'
})
export class OnlineDataService extends EventEmitter{

  constructor(private http:HttpClient) {
    super();
   }

  getOnlineData():void{
    this.http.get('https://randomuser.me/api/?results=10').toPromise().then((res:any)=>{
      localStorage.setItem('users', JSON.stringify(res.results));
      this.emit('datachanged');
    });
  }

  getCachedData():string{
    return localStorage.getItem('users');
  }

  clearData():void{
    localStorage.removeItem('users');
    this.emit('datachanged');
  }
}
