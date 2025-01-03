import { Routes } from '@angular/router';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { CreateOrderComponent } from './components/create-order/create-order.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashbord',
    pathMatch: 'full',
  },
  {
    path: 'dashbord',
    component: DashbordComponent
  },
  {
    path: 'new-order',
    component: CreateOrderComponent
  }
];
