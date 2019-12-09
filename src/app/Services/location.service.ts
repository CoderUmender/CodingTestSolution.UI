import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Observable } from 'rxjs';
import { location } from '../models/location';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LocationService {
   localUrl = 'api/v1/location/';
 
  constructor(private http: HttpClient) { }

getLocations(): Observable<location>
{
  return this.http.get<location>(`${environment.ApiUrl}` + this.localUrl);
}
// tslint:disable-next-line:no-shadowed-variable
add(description: location) {



  const options = {headers: {'Content-Type': 'application/json'}};
  return   this.http.post<location>(`${environment.ApiUrl}` + 'api/v1/Location/', JSON.stringify(description), options).subscribe(
        (t: location) => console.log(JSON.stringify(t)),
        // err => this.router.navigate(['/dashboard/Status500'], { queryParams: { error: 500 } }),
        // () => this.router.navigateByUrl('/settings')
    );
}

}
