import { Component, Input, OnChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Checkup } from 'src/app/shared/models/checkup.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnChanges{
  @Input() data:any
  @Input() columns:string[] = [];
  datasource = new MatTableDataSource<Checkup>();

  ngOnChanges() {
    this.datasource.data = this.data;
  }
}
