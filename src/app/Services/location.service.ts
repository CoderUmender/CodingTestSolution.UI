import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Observable } from 'rxjs';
import { location } from '../models/location';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LocationService {
   localUrl = 'api/v1/location/';
 
  constructor(private http: HttpClient,private router: Router) { }

getLocations(): Observable<location>
{
  return this.http.get<location>(`${environment.ApiUrl}` + this.localUrl);
}
// tslint:disable-next-line:no-shadowed-variable
add(description: location) {



  const options = {headers: {'Content-Type': 'application/json'}};
  return   this.http.post<location>(`${environment.ApiUrl}` + 'api/v1/Location/', JSON.stringify(description), options).subscribe(
        (t: location) => console.log(JSON.stringify(t)),
         err => console.log('error'),
         () => this.router.navigateByUrl('/locations')
    );
}
edit(description: location) {



  const options = {headers: {'Content-Type': 'application/json'}};
  return   this.http.put<location>(`${environment.ApiUrl}` + 'api/v1/Location/', JSON.stringify(description), options).subscribe(
        (t: location) => console.log(JSON.stringify(t)),
         err => console.log('error'),
         () => this.router.navigateByUrl('/locations')
    );
}

}
