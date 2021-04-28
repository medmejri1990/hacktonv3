import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './user/register/register.component';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [{
  //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
 // { path: 'register', component: RegisterComponent },
  //{ path: 'detail/:id', component: HeroDetailComponent },
  //{ path: 'heroes', component: HeroesComponent }
  path: '',
  component: AppComponent,
  children: [
    {
      path: 'user',
      component: UserComponent,
    },
    {
      path: 'user/register',
      component: RegisterComponent,
    },
    /*{
      path: 'user',
      loadChildren: () => import('./user/user.module')
        .then(m => m.UserModule),
    },*/
    
  ],
  },
  { path: '', redirectTo: 'user', pathMatch: 'full' },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
