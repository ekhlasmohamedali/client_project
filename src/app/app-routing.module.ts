import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateblogComponent } from './createblog/createblog.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SettinguserComponent } from './settinguser/settinguser.component';


const routes: Routes = [
  { path: 'home/register', component: RegisterComponent },
  { path: 'home/login', component: LoginComponent },
  { path: 'blog', component: CreateblogComponent },
  { path: 'blog/list', component: ListComponent },
  { path: 'profile/setting', component: SettinguserComponent },


  { path: '**', component: ListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
