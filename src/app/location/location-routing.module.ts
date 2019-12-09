import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationComponent } from './location.component';
import { CreateComponent } from './create.component';

import { createComponent } from '@angular/compiler/src/core';
import { EditComponent } from './edit.component';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: '', component: LocationComponent
  },
  {
    path: 'locations/', component: LocationComponent
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
