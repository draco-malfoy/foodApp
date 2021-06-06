import { NgoLoginFormComponent } from './components/ngo-login-form/ngo-login-form.component';
import { UserLoginFormComponent } from './components/user-login-form/user-login-form.component';
import { AddBreakfastComponent } from './components/add-breakfast/add-breakfast.component';
import { AddLunchComponent } from './components/add-lunch/add-lunch.component';
import { AddDinnerComponent } from './components/add-dinner/add-dinner.component';
import { MyordersComponent } from './components/myorders/myorders.component';
import { RequestsComponent } from './components/ngo/requests/requests.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "requests", component: RequestsComponent },

  // mohiuddin
  { path: 'breakfast', component: AddBreakfastComponent },
  { path: 'lunch', component: AddLunchComponent },
  { path: 'dinner', component: AddDinnerComponent },
  { path: 'myorders', component: MyordersComponent },

  //lokesh
  { path: 'user/signUp', component: UserLoginFormComponent },
  { path: 'ngo/signUp', component: NgoLoginFormComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
