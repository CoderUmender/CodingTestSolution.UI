import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentComponent } from './department.component';
import { CreateComponent } from './create.component';
import { EditComponent } from './edit.component';
import { CategoryComponent } from './Category/category.component';


const routes: Routes = [
  {
    path: '', component: DepartmentComponent
  },
  {
    path: 'departments/:id', component: DepartmentComponent
  },
  {
  path: 'locations/departments/:id/Create', component: CreateComponent
},
{
path: 'locations/departments/:id/edit/:did', component: EditComponent
},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentRoutingModule { }
