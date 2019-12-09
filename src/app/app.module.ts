import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule,FormGroup } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationComponent } from './location/location.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AddlocationComponent } from './location/addlocation/addlocation.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationComponent,
    LoginComponent,
    AddlocationComponent
  ],
  imports: [
    
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HttpClientModule,HttpClient ],
  bootstrap: [AppComponent]
})
export class AppModule { }
