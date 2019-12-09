import { Component, OnInit } from '@angular/core';
import { LocationService } from '../Services/location.service';
import { Observable } from 'rxjs';
import { location } from '../models/location';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  allLocations: Observable<location>;
  showlocations = true;
  constructor(private locationservice: LocationService , private router: Router) { }

  ngOnInit() {
    this.getlocations();
  }
  getlocations() {

   this.allLocations = this.locationservice.getLocations();
  }
  AddLocation()
  {
    this.showlocations = false;
    this.router.navigateByUrl('/addlocation');
  }
  Delete(name: location) {
    this.locationservice.delete(name).subscribe(
      () => console.log(name + ' location Deleted'),
      err => console.log(''),
      () => this.router.navigate(['/locations'], {
        queryParams: {refresh: new Date().getTime()}
     })
    );
      }

}
