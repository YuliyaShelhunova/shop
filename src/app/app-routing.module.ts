import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartListComponent } from './cart';
import { OrderFormComponent } from './orders';
import { LoginComponent } from './layout/components/login/login.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'products/',
    pathMatch: 'full'
  },
  {
    path: 'cart',
    component: CartListComponent
  },
  {
    path: 'order',
    component: OrderFormComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
