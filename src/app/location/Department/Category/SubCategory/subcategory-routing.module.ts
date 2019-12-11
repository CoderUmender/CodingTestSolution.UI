import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubcategoryComponent } from './subcategory.component';


const routes: Routes = [
  {
    path: '', component: SubcategoryComponent
  },
  {
    path: 'locations/departments/:id/categories/:did/subcategory/:cid', component: SubcategoryComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubcategoryRoutingModule { }
