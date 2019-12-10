import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationComponent } from './location.component';
import { CreateComponent } from './create.component';

import { createComponent } from '@angular/compiler/src/core';
import { EditComponent } from './edit.component';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from 'CodingTestSolution.UI/src/app/helpers/auth.guard';


const routes: Routes = [
  {
    path: '', component: LocationComponent, canActivate: [AuthGuard]
  },
  {
    path: 'locations/', component: LocationComponent , canActivate: [AuthGuard]
  },
{
  path: 'Create', component: CreateComponent
},
{
path: 'Edit', component: EditComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes),FormsModule],
  exports: [RouterModule,FormsModule]
})
export class LocationRoutingModule { }
