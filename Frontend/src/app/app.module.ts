import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RegisterComponent } from './user/register/register.component';
import { UserComponent } from './user/user.component';
import { NbAlertModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbIconModule, NbInputModule, NbLayoutModule, NbSelectModule, NbTabsetModule, NbThemeModule, NbToastrModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { ReactiveFormsModule } from '@angular/forms';
import { UserData } from './services/abstractService';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './user/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbCardModule,
    NbTabsetModule,
    NbAlertModule,
    NbButtonModule,
    NbCheckboxModule,
    NbIconModule,
    NbInputModule,
    ReactiveFormsModule,
    NbSelectModule,
    NbLayoutModule,
    NbToastrModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    NoopAnimationsModule

    
  ],  
  providers: [
    { provide: UserData, useClass: UserService },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
