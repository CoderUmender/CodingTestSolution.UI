import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationServiceService } from '../Services/authentication-service.service';
import { User } from '../models/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  user: User;
  constructor( private formBuilder: FormBuilder,
               private route: ActivatedRoute,
               private router: Router,
               private authenticationService: AuthenticationServiceService) {
      if (this.authenticationService.currentUserValue) {
       this.router.navigate(['/locations/']);
    }
     }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });

  // get return url from route parameters or default to '/'
   
  }
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    // if (this.loginForm.invalid) {
    //     return;
    // }

    this.loading = true;
    const user = new User();

    user.username = this.f.username.value;
    user.password = this.f.password.value;

    this.authenticationService.login(user)
        .pipe(first())
        .subscribe(
            data => {
           
              this.loading = false;
              alert();
              this.router.navigate(['location']);
            },
            error => {
                this.error = 'invalid user';
                this.loading = false;
               // this.router.navigate(['/login']);
            });
}

}
