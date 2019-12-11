import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { SubcategoryComponent } from './SubCategory/subcategory.component';
import { SubcategoryModule } from './SubCategory/subcategory.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    
  ]
})
export class CategoryModule { }
