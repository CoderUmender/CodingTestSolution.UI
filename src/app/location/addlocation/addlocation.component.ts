import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { LocationService } from 'src/app/Services/location.service';
import { location } from 'src/app/models/location';

@Component({
  selector: 'app-addlocation',
  templateUrl: './addlocation.component.html',
  styleUrls: ['./addlocation.component.css']
})
export class AddlocationComponent implements OnInit {

  locationform: FormGroup;
  
  loading = false;
  submitted = false;
  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private locationservice: LocationService
    ) { }

  ngOnInit() {

    this.locationform = this.formBuilder.group({
      Description: ['', Validators.required] 
  });

  }
  get f() { return this.locationform.controls; }
  onSubmit() {
    this.submitted = true;
    const loc = new location();
    loc.Description = this.locationform.get('Description').value;

    this.locationform.get('Description').setValue(this.route.snapshot.paramMap.get('Description'));
    this.route.queryParams.subscribe(
      (params: Params) => {

      alert();
          if (params.hasOwnProperty('Description')) { this.locationform.get('Description').setValue(params['Description']); }
         
      });
    // stop here if form is invalid
    if (this.locationform.invalid) {
        return;
    }

    this.loading = true;
    this.locationservice.add(loc);
}
}
