import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { environment } from 'CodingTestSolution.UI/src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient, private router: Router) { }

  getdepts(id: string, did: string): Observable<Category>
{

  return this.http.get<Category>(`${environment.ApiUrl}` + 'api/v1/location/' + id + '/department/' + did + '/category');
}
}
