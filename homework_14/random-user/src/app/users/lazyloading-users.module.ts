import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'users', loadChildren:'./users.module#UsersModule'},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,    
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class LazyloadingUsersModule { }
