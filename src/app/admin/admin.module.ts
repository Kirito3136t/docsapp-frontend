import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ListComponent } from './pages/list/list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';
import { TableComponent } from './components/table/table.component';

const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'home',component: HomeComponent},
  {path: 'dashboard',component: DashboardComponent},
  {path:'list',component:ListComponent},
  {path:'**',component:HomeComponent}
];

@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    ListComponent,
    NavbarComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports:[
    RouterModule
  ]
})
export class AdminModule { }
