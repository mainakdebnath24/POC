import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { homeRoute, loginRoute } from './';
import { educationRoute } from '../education/education.route';

//import { AccountComponent } from './account.component';

const accountState = [homeRoute, loginRoute , educationRoute];

//const routes: Routes = [{ path: '', component: AccountComponent }];

@NgModule({
  imports: [RouterModule.forChild(accountState)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
