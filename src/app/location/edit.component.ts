import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationService } from '../Services/location.service';

import { location } from 'src/app/models/location';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  locationform: FormGroup;
  location: location;
  loading = false;
  submitted = false;
  locationid: string;
  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private locationservice: LocationService
    ) { }

  ngOnInit() {
    this.locationid = this.route.snapshot.paramMap.get('Location_Id');
    this.locationform = this.formBuilder.group({
      Description: ['', Validators.required]
  });
}
get f() { return this.locationform.controls; }
onSubmit() {

    this.location.Description =  this.locationform.get('Description').value;
    this.location.Location_Id = Number(this.locationid);
    this.locationservice.edit(this.location);
      }

}
