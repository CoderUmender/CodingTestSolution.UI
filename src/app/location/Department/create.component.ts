import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationService } from 'src/app/Services/location.service';
import { Department } from 'src/app/models/department';
import { DepartmentService } from 'src/app/Services/department.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  deptform: FormGroup;
  loading = false;
  submitted = false;
  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private locationservice: DepartmentService
    ) { }

  ngOnInit() {

    this.deptform = this.formBuilder.group({
      Description: ['', Validators.required]
  });

  }
  get f() { return this.deptform.controls; }
  onSubmit() {
    this.submitted = true;
    const dept = new Department();
    dept.Description = this.deptform.get('Description').value;
    dept.Location_id=23;
    // stop here if form is invalid
    if (this.deptform.invalid) {
        return;
    }
    this.loading = true;
    this.locationservice.add(dept);
}

}
