import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    RegisterComponent,
    UserComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
     RegisterComponent,
  ]
  
  
})
export class UserModule { }
