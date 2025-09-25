import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Checkup } from 'src/app/shared/models/checkup.model';
import { Patient } from 'src/app/shared/models/patient.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class AdminService {
  private apiUrl = environment.apiUrl;

  constructor(private http:HttpClient) { }

  getAllPatients():Observable<Patient[]>{
    return this.http.get<Patient[]>(`${this.apiUrl}/patients`);
  }

  getAllCheckups():Observable<Checkup[]>{
    return this.http.get<Checkup[]>(`${this.apiUrl}/checkups`);
  }
}
