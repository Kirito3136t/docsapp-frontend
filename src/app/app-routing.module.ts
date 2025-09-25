import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {path:'admin',loadChildren:()=> import('./admin/admin.module').then(m=>m.AdminModule)},
  {path:'doctor',loadChildren:()=> import('./doctor/doctor.module').then(m=>m.DoctorModule)},
  {path:'staff',loadChildren:()=> import('./staff/staff.module').then(m=>m.StaffModule)},
  {path:'login',component:LoginComponent},
  {path:'',component:LoginComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
