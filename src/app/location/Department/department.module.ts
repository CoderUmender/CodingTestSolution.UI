import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentRoutingModule } from './department-routing.module';
import { DepartmentComponent } from './department.component';
import { CreateComponent } from './create.component';
import { EditComponent } from './edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryComponent } from './Category/category.component';
import { CategoryModule } from './Category/category.module';
import { SubcategoryComponent } from './Category/SubCategory/subcategory.component';
import { SubcategoryModule } from './Category/SubCategory/subcategory.module';


@NgModule({
  declarations: [DepartmentComponent, CreateComponent, EditComponent, CategoryComponent,SubcategoryComponent],
  imports: [
    CommonModule,
    DepartmentRoutingModule,
    CategoryModule,
    SubcategoryModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class DepartmentModule { }
