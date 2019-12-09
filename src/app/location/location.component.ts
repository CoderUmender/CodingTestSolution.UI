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

  allLocations:Observable<location>;
  constructor(private locationservice:LocationService ,private router: Router) { }

  ngOnInit() {
    this.getlocations();
  }
  getlocations(){

   this.allLocations= this.locationservice.getLocations();
    
  }
  AddLocation()
  {
   //this.router.navigate(['addlocation']);
    this.router.navigateByUrl('/addlocation');
    
  }

}
