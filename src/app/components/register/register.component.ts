import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { BackendCallService } from 'src/app/services/backend-call.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private userService: UserService) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          firstName: ['',[Validators.required, Validators.maxLength(5)]],
          lastName: ['', [Validators.required, Validators.maxLength(5)]],
          username: ['', [Validators.required, Validators.maxLength(20)]],
          password: ['', [Validators.required, Validators.minLength(6)]]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      this.loading = true;
      this.userService.register(this.registerForm.get('username').value, 
      this.registerForm.get('firstName').value + this.registerForm.get('lastName').value,
      this.registerForm.get('password').value)
          .pipe(first())
          .subscribe(
              data => {
                  // this.alertService.success('Registration successful', true);
                  this.router.navigate(['/login']);
              },
              error => {
                  // this.alertService.error(error);
                  this.loading = false;
              });
  }
}
