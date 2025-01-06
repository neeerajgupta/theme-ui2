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
  },
  {
    path: 'order',
    component: OrdersComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'forgotpassword',
    component: ForgotPasswordComponent
  },
  {
    path: 'auth',
    component: AuthenticateOtpComponent
  },
  {
    path: 'invoice',
    component: InvoiceComponent
  },
  {
    path: 'rechargeWallet',
    component: RechargeWalletComponent
  }
];
