import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { CanAccessUserDetailsGuard } from './user-details/can-access-user-details-guard';
import { UserService } from './user.service';

const routes: Routes = [
  {path:'', component:UsersComponent},  
  {path:':id', component:UserDetailsComponent, canActivate:[CanAccessUserDetailsGuard]}
];

@NgModule({
  declarations: [UsersComponent, UserDetailsComponent],
  providers:[CanAccessUserDetailsGuard,UserService],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule], 
  bootstrap:[UsersComponent]
})
export class UsersModule { }
