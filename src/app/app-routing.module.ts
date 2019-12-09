import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../app/helpers/auth.guard';
import { LoginComponent } from './login/login.component';
import { AddlocationComponent } from './location/addlocation/addlocation.component';


const routes: Routes = [
  { path: 'location', component: Location },
  { path: 'login', component: LoginComponent },
  { path: 'addlocation', component: AddlocationComponent },

  // otherwise redirect to location
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
