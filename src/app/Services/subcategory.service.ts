import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { subcategory } from '../models/SubCategory';
import { environment } from 'CodingTestSolution.UI/src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {
  constructor(private http: HttpClient, private router: Router) { }

  getdsubs(id: string, did: string, cid: string): Observable<subcategory>
{

const url = `${environment.ApiUrl}` + 'api/v1/location/' + id + '/department/' + did + '/category/' +  cid + '/subcategory/';

  // tslint:disable-next-line:max-line-length
return this.http.get<subcategory>(url);
alert(0);
}
}
