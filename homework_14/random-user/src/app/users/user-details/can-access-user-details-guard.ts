import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { UserService } from '../user.service';
import { Injectable } from '@angular/core';
@Injectable()
export class CanAccessUserDetailsGuard implements CanActivate{

    constructor(private userService : UserService){

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {  
        let u = this.userService.getUserByUUId(route.params['id']); 
        return u != null && u.login != null;
    }
}