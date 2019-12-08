import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../app/helpers/auth.guard';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', component: Location, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },

  // otherwise redirect to location
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
