import { Component, OnInit } from '@angular/core';
import { subcategory } from 'src/app/models/SubCategory';
import { Observable } from 'rxjs';
import { SubcategoryService } from 'src/app/Services/subcategory.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css']
})
export class SubcategoryComponent implements OnInit {

  allsubcatscats: Observable<subcategory>;
  showlocations = true;
  dept: string ;
  locid: string;
  constructor(private subcatService: SubcategoryService , private router: Router, private route: ActivatedRoute) {

   }

  ngOnInit() {

    const did: string = this.route.snapshot.paramMap.get('did');
    const id: string = this.route.snapshot.paramMap.get('id');
    const cid: string = this.route.snapshot.paramMap.get('cid');
    this.locid = id;
    this.getsubcategories(did, id,cid);
    this.dept = did;
  }
  getsubcategories(deptid: string, id: string, cid: string) {

   this.allsubcatscats = this.subcatService.getdsubs(id, deptid, cid);
  }
  

}
