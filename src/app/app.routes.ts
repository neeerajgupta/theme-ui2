import { Routes } from '@angular/router';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { CreateOrderComponent } from './components/create-order/create-order.component';
import { OrdersComponent } from './components/orders/orders.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { AuthenticateOtpComponent } from './components/authenticate-otp/authenticate-otp.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { RechargeWalletComponent } from './components/recharge-wallet/recharge-wallet.component';
import { LayoutComponent } from './layouts/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LayoutComponent,
    children : [
      {
        path: '',
        loadComponent: () => import('./components/dashbord/dashbord.component').then(m => m.DashbordComponent)
      },
      {
        path: 'dashboard',
        loadComponent: () => import('./components/dashbord/dashbord.component').then(m => m.DashbordComponent)
      },
      {
        path: 'new-order',
        loadComponent: () => import('./components/create-order/create-order.component').then(m => m.CreateOrderComponent)
      },
      {
        path: 'order',
        loadComponent: () => import('./components/orders/orders.component').then(m => m.OrdersComponent)
      },
      {
        path: 'invoice',
        loadComponent: () => import('./components/invoice/invoice.component').then(m => m.InvoiceComponent)
      },
      {
        path: 'recharge-wallet',
        loadComponent: () => import('./components/recharge-wallet/recharge-wallet.component').then(m => m.RechargeWalletComponent)
      },
    ]
  },
 
  {
    path: 'login',
    loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () => import('./components/register/register.component').then(m => m.RegisterComponent)
  },
  {
    path: 'forgotpassword',
    loadComponent: () => import('./components/forgot-password/forgot-password.component').then(m => m.ForgotPasswordComponent)
  },
  {
    path: 'auth',
    loadComponent: () => import('./components/authenticate-otp/authenticate-otp.component').then(m => m.AuthenticateOtpComponent)
  }
];
