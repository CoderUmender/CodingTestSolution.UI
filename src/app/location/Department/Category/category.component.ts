import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from 'src/app/models/department';
import { DepartmentService } from 'src/app/Services/department.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  allcats: Observable<Category>;
  showlocations = true;
  dept: string ;
  locid: string;
  constructor(private catService: CategoryService , private router: Router, private route: ActivatedRoute) {

   }

  ngOnInit() {

    const did: string = this.route.snapshot.paramMap.get('did');
    const id: string = this.route.snapshot.paramMap.get('id');
    this.locid = id;
    this.getcategories(did, id);
    this.dept = did;
  }
  getcategories(deptid: string, id: string) {

   this.allcats = this.catService.getdepts(id, deptid);
  }
  
  // Delete(name: Department) {
  //   this.deptservice.delete(name).subscribe(
  //     () => console.log(name + ' dept Deleted'),
  //     err => console.log(''),
  //     () => this.router.navigate(['/departments'], {
  //       queryParams: {refresh: new Date().getTime()}
  //    })
  //   );
  //     }
}
