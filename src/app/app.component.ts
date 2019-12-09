import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationServiceService } from '../app/Services/authentication-service.service'
import { User } from '../app/models/user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  currentUser: User;
  title = 'CodingTestUI';
  showlocations = true;
  addlocations = false;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationServiceService
) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
}

logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
}
AddLocation()
  {
    this.showlocations = false;
  this.AddLocation=true;
    
  }
}
