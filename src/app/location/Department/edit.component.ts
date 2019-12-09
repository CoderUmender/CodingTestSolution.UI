import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationService } from 'src/app/Services/location.service';
import { Department } from 'src/app/models/department';
import { DepartmentService } from 'src/app/Services/department.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  deptform: FormGroup;

  loading = false;
  submitted = false;
  locationid: string;
  deptid: string;
  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private deptservice: DepartmentService
    ) { }

  ngOnInit() {
    this.locationid = this.route.snapshot.paramMap.get('Location_Id');
    this.deptid = this.route.snapshot.paramMap.get('id');
    this.deptform = this.formBuilder.group({
      Description: ['', Validators.required]
  });
    this.deptform.controls.Description.setValue(this.route.snapshot.paramMap.get('Description'));
}
get f() { return this.deptform.controls; }
onSubmit() {
  // tslint:disable-next-line:no-shadowed-variable
  const loc = new Department();
  loc.Description = this.deptform.get('Description').value;
  loc.Location_id = Number(this.locationid);
  loc.Department_id = Number(this.deptid);

  this.deptservice.edit(loc);
      }
}
