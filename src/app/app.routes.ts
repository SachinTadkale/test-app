import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './aside-secssion/home/home.component';
import { UsersComponent } from './aside-secssion/users/users.component';
import { ProductComponent } from './aside-secssion/product/product.component';
import { authGuard } from './authgard.guard';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent ,canActivate: [authGuard]},
  { path: 'user', component: UsersComponent, outlet: 'outlet2',canActivate: [authGuard] },
  { path: 'home', component: HomeComponent, outlet: 'outlet2' ,canActivate: [authGuard]},
  { path: 'product', component: ProductComponent, outlet: 'outlet2',canActivate: [authGuard] }

];
