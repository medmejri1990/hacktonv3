import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbGlobalPhysicalPosition, NbToastrService } from '@nebular/theme';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: NbToastrService,
    private router: Router,
    private http: HttpClient

    ) 
    {}


  ngOnInit(): void {
    this.LoginForm = this.formBuilder.group({
      username: ['', Validators.compose([
          Validators.required,
        ]),
      ],
      password: ['', Validators.required],
    }
    );
  }
  get f(){ return this.LoginForm.controls; }

  onSubmit() {
    this.submitted = true;

    let user = {
      "username" : this.LoginForm.value.username,
      "password" : this.LoginForm.value.password,
    };

    if (this.LoginForm.invalid) {
      return;
    }

    let service = new UserService(this.http);
    service.login(user).subscribe(
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
        this.toastrService.show('', 'User is successfully logged in !', { position, status },);
        this.router.navigate(['/blog']);
      },
    );

    
  }
  onReset() {
    this.submitted = false;
    this.LoginForm.reset();
  }
}
