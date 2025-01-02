import { Routes } from '@angular/router';
import { DashbordComponent } from './components/dashbord/dashbord.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashbord',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: 'dashbord',
        pathMatch: 'full',
      },
   
    {
       
        path:'dashbord',component:DashbordComponent
    }
];
