import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule,FormGroup } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationComponent } from './location/location.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';

import { LocationModule } from './location/location.module';
import { LocationRoutingModule } from './location/location-routing.module';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { JwtInterceptor } from 'CodingTestSolution.UI/src/app/helpers/jwt.interceptor';
import { ErrorInterceptor } from 'CodingTestSolution.UI/src/app/helpers/error.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent 
  ],
  imports: [
    
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LocationModule,
    LocationRoutingModule,
  ],
  providers: [HttpClientModule, HttpClient , {provide: LocationStrategy, useClass: HashLocationStrategy} ,
  
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
