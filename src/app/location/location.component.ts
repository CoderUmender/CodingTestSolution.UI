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
  Delete(name: string) {
    // this._thresholdsService.Delete(name).subscribe(
    //   () => console.log(name + ' threshold Deleted'),
    //   err => this.router.navigate(['/dashboard/Status500'], { queryParams: { error: 500 } }),
    //   () => this.router.navigate(['/thresholds'], {
    //     queryParams: {refresh: new Date().getTime()}
    //  })
    // );
      }

}
