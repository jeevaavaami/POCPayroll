import { Routes } from '@angular/router';
// Adjusting the paths to look in the correct folders
import { SignupComponent } from './signup/signup';
import { LoginComponent } from './login/login';

export const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'signup', pathMatch: 'full' } 
];