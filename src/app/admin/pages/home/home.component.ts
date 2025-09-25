import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { MatTableDataSource } from '@angular/material/table';
import { Checkup } from 'src/app/shared/models/checkup.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  data:Checkup[]=[];
  columns:string[]=['id','name','date','time'];

  constructor(private adminService:AdminService){
    this.fetchAllCheckups();
  }

  fetchAllCheckups(){
    return this.adminService.getAllCheckups().subscribe({
      next:(checkups)=>{ 
        this.data = checkups;
      },
      error:(err)=>{
        console.error('Error fetching patients:', err);
      }
    });
  }
}
