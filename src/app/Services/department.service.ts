import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Department } from '../models/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  localUrl = 'api/v1/location/{location_id}/department/';
 
  constructor(private http: HttpClient, private router: Router) { }

getdepartments(id: string): Observable<Department>
{

  return this.http.get<Department>(`${environment.ApiUrl}` + 'api/v1/location/' + id + '/department/');
}
// tslint:disable-next-line:no-shadowed-variable
add(department: Department) {
  const options = {headers: {'Content-Type': 'application/json'}};
  return   this.http.post<Department>(`${environment.ApiUrl}` + 'api/v1/department/', JSON.stringify(department), options).subscribe(
        (t: Department) => console.log(JSON.stringify(t)),
         err => console.log('error'),
         () => this.router.navigateByUrl('/departments/23')
    );
}
edit(department: Department) {


  const options = {headers: {'Content-Type': 'application/json'}};
  return   this.http.put<Department>(`${environment.ApiUrl}` + 'api/v1/department/', JSON.stringify(department), options).subscribe(
        (t: Department) => console.log(JSON.stringify(t)),
         err => console.log('error'),
         () => this.router.navigateByUrl('/locations')
    );
}
delete(description: Department) {
  const id = description.Department_id;
  const options = {headers: {'Content-Type': 'application/json'}};
  return this.http.delete<void>(`${environment.ApiUrl}` + 'api/v1/Location/?id=' + `${id}`);
}
}
