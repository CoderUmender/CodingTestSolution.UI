import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../app/helpers/auth.guard';
import { LoginComponent } from './login/login.component';
import { AddlocationComponent } from './location/addlocation/addlocation.component';
import { LocationComponent } from './location/location.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  // path: '',
  // component: LayoutComponent,
  // { path: '', redirectTo: 'locations', pathMatch: 'prefix' },
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
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
