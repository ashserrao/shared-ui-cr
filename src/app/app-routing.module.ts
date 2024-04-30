import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { AdminComponent } from './components/admin/admin.component';
import { AttendenceComponent } from './components/attendence/attendence.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'attendence', component: AttendenceComponent },
    ],
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {path:'dashboard', component:DashboardComponent},
      { path: 'accounts', component: AccountsComponent },
      { path: 'adduser', component: AddUserComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
