import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit, OnDestroy {

  private routerSubcription:Subscription;
  private _userid:any;
  ngOnDestroy(): void {
    if (this.routerSubcription != null){
      this.routerSubcription.unsubscribe();
      this.routerSubcription = null;
    }
  }

  constructor(private userService : UserService, private router:ActivatedRoute) {
    this.routerSubcription = router.params.subscribe((param) =>{
      console.log(param);
      this._userid = param['id'];
    });
  }

  get user() : any{
    return this.userService.getUserByUUId(this._userid);
  }

  ngOnInit() {
  }

}
