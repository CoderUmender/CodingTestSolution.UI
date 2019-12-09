import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationComponent } from './location.component';
import { CreateComponent } from './create.component';
import { AddlocationComponent } from './addlocation/addlocation.component';
import { createComponent } from '@angular/compiler/src/core';
import { EditComponent } from './edit.component';


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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationRoutingModule { }
