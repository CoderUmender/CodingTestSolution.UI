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

getLocations():Observable<location>
{

  alert(`${environment.ApiUrl}`+this.localUrl);
  return this.http.get<location>(`${environment.ApiUrl}`+this.localUrl);
}
add(description: string) {
  
  
  alert(description);
 //return this.http.post<any>('http://localhost:58063/api/users/Authenticate/', this.user)
// return this.http.post(`${environment.ApiUrl}',{user})
 //return this.http.post<any>(`${environment.ApiUrl}`+this.localUrl +description);
 return this.http.post<any>(`${environment.ApiUrl}`+this.localUrl ,  
 description);  
}

}
