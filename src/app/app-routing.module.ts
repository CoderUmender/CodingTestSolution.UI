import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../app/helpers/auth.guard';
import { LoginComponent } from './login/login.component';

import { LocationComponent } from './location/location.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  // path: '',
  // component: LayoutComponent,
   { path: 'location', redirectTo: 'locations', pathMatch: 'prefix' },
   { path: 'login', component: LoginComponent },
  // { path: 'location', component: LoginComponent },
  // { path: 'locations', loadChildren: () => import('./location/location.module').then(m => m.LocationModule)},
  // otherwise redirect to location
  {
    path: '',
    component: AppComponent,
    children: [
        { path: '', redirectTo: 'location', pathMatch: 'prefix' },
       { path: 'locations', loadChildren: () => import('./location/location.module').then(m => m.LocationModule)},
    ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
