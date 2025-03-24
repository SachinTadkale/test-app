import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    loadComponent: ()=>{ return import('./Pages/home/home.component').then((m)=>m.HomeComponent);}
  },
  {
    path:'signup',
    pathMatch:'full',
    loadComponent: ()=>{ return import('./Pages/sign-up/sign-up.component').then((m)=>m.SignUpComponent);}
  },
  {
    path:'login',
    pathMatch:'full',
    loadComponent: ()=>{ return import('./Pages/login/login.component').then((m)=>m.LoginComponent);}
  }
];
