import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/models/department';
import { DepartmentService } from 'src/app/Services/department.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  alldepartments: Observable<Department>;
  showlocations = true;
  locationID: string ;
  constructor(private deptservice: DepartmentService , private router: Router, private route: ActivatedRoute) {
    
   // tslint:disable-next-line:align

   
   }

  ngOnInit() {

    const id: string = this.route.snapshot.paramMap.get('id');
    this.locationID=id;
    this.getdepartments(id);
  }
  getdepartments(locationid: string) {

   this.alldepartments = this.deptservice.getdepartments(locationid);
  }
  
  Delete(name: Department) {
    this.deptservice.delete(name).subscribe(
      () => console.log(name + ' dept Deleted'),
      err => console.log(''),
      () => this.router.navigate(['/departments'], {
        queryParams: {refresh: new Date().getTime()}
     })
    );
      }

}
