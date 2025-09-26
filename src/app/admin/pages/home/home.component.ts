import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Checkup } from 'src/app/shared/models/checkup.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectCheckups,selectLoading } from '../../store/admin.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  data:Checkup[]=[];
  columns:string[]=['id','name','date','time'];

  constructor(private adminService:AdminService, private store: Store){
    this.fetchAllCheckups();
  }

  checkup$:Observable<Checkup[]> = this.store.select(selectCheckups);
  loading$: Observable<boolean> = this.store.select(selectLoading);

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
