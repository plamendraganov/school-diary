import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridNg2 } from 'ag-grid-angular';

@Component({
  selector: 'app-school-diary',
  templateUrl: './school-diary.component.html',
  styleUrls: ['./school-diary.component.scss']
})
export class SchoolDiaryComponent implements OnInit {
  @ViewChild('agGrid') agGrid: AgGridNg2;

  rowData: any;
  columnDefs = [
    {
      headerName: 'First Name', 
      field: 'firstName', 
      sortable: true, 
      filter: true, 
      checkboxSelection: true
    },
    {
      headerName: 'Last Name', 
      field: 'lastName', 
      sortable: true, 
      filter: true
    },
    {
      headerName: 'Age', 
      field: 'age', 
      sortable: true, 
      filter: true}
];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.rowData = [
      {
          number: 1,
          firstName: 'Anthony',
          lastName: 'Joshua',
          age: 15,
          address: 'London',
          phoneNumber: '089348423432',
          photoUrl: '' 
      },
      {
          number: 1,
          firstName: 'Bob',
          lastName: 'Wilder',
          age: 15,
          address: 'London',
          phoneNumber: '089348423432',
          photoUrl: '' 
      },
      {
          number: 1,
          firstName: 'Mark',
          lastName: 'Roberts',
          age: 15,
          address: 'London',
          phoneNumber: '089348423432',
          photoUrl: '' 
      },
      {
          number: 1,
          firstName: 'Mike',
          lastName: 'Sanders',
          age: 15,
          address: 'London',
          phoneNumber: '089348423432',
          photoUrl: '' 
      },
      {
          number: 1,
          firstName: 'Robert',
          lastName: 'Franklin',
          age: 15,
          address: 'London',
          phoneNumber: '089348423432',
          photoUrl: '' 
      }
  ]
  }

}
