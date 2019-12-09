import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationRoutingModule } from './location-routing.module';
import { CreateComponent } from './create.component';
import { EditComponent } from './edit.component';
import { LocationComponent } from './location.component';
import { createComponent } from '@angular/compiler/src/core';


@NgModule({
  declarations: [LocationComponent,CreateComponent, EditComponent],
  imports: [
    CommonModule,
    LocationRoutingModule,

  ],
  exports: [ ]
})
export class LocationModule { }
