import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationRoutingModule } from './location-routing.module';
import { CreateComponent } from './create.component';
import { EditComponent } from './edit.component';
import { LocationComponent } from './location.component';
import { createComponent } from '@angular/compiler/src/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LocationComponent, CreateComponent, EditComponent],
  imports: [
    CommonModule,
    LocationRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  exports: [ ]
})
export class LocationModule { }
