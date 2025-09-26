import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ListComponent } from './pages/list/list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';
import { TableComponent } from './components/table/table.component';
import { AdminService } from './services/admin.service';
import { StoreModule } from '@ngrx/store';
import { adminFeatureKey,adminReducer } from './store/admin.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AdminEffects } from './store/admin.effects';

const routes: Routes = [
  {
    path: '',  
    component: HomeComponent, 
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' }, 
      { path: 'home', component: HomeComponent },          
      { path: 'dashboard', component: DashboardComponent },
      { path: 'list', component: ListComponent },          
      { path: '**', redirectTo: 'home', pathMatch: 'full' } 
    ]
  }
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
    SharedModule,
    StoreModule.forFeature(adminFeatureKey, adminReducer),
    EffectsModule.forFeature([AdminEffects])
  ],
  exports:[
    RouterModule
  ],
  providers:[
    AdminService
  ]
})

export class AdminModule { }
