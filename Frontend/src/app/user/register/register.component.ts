import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbGlobalPhysicalPosition, NbToastrService } from '@nebular/theme';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  RegisterForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: NbToastrService,
    private router: Router,
    private http: HttpClient

    ) 
    {}

  ngOnInit(): void {
    this.RegisterForm = this.formBuilder.group({
      username: ['', Validators.compose([
          Validators.required,
        ]),
      ],
      email: ['', Validators.compose([
        Validators.required,
        Validators.email
      ]),
    ],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      role: ['', Validators.required],
    },
    {
      validator: this.MustMatch('password', 'confirmPassword')
    }
    );
    
  }
  get f(){ return this.RegisterForm.controls; }

  onSubmit() {
    this.submitted = true;

    let user = {
      "username" : this.RegisterForm.value.username,
      "email" : this.RegisterForm.value.email,
      "password" : this.RegisterForm.value.password,
      "role" : this.RegisterForm.value.role,
    };

    if (this.RegisterForm.invalid) {
      return;
    }

    let service = new UserService(this.http);
    service.register(user).subscribe(
      (val) => {
      },
      error => {
        const position = NbGlobalPhysicalPosition.BOTTOM_LEFT;
        const status = 'danger';
        this.toastrService.show('', error.error.message, { position, status });
      },
      () => {
        const position = NbGlobalPhysicalPosition.BOTTOM_LEFT;
        const status = 'success';
        this.toastrService.show('', 'User is successfully registers !', { position, status },);
        this.router.navigate(['/users']);
      },
    );

    
  }
  onReset() {
    this.submitted = false;
    this.RegisterForm.reset();
  }

  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }

  } 
}