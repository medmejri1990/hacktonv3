import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './user/register/register.component';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { BlogComponent } from './blog/blog/blog.component';

const routes: Routes = [{
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
    {
      path: 'blog',
      component: BlogComponent,
    },    
    
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
