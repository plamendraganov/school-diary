import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridNg2 } from 'ag-grid-angular';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    @ViewChild('agGrid') agGrid: AgGridNg2;
    title = 'app';
    public loading = false;
    value: Date;

    columnDefs = [
        {
          headerName: 'Make', 
          field: 'make', 
          sortable: true, 
          filter: true, 
          checkboxSelection: true
        },
        {
          headerName: 'Model', 
          field: 'model', 
          sortable: true, 
          filter: true
        },
        {
          headerName: 'Price', 
          field: 'price', 
          sortable: true, 
          filter: true}
    ];

    rowData: any;

    constructor(private http: HttpClient) {

    }

    async ngOnInit() {
      this.loading = true;  
      this.rowData = this.http.get('https://api.myjson.com/bins/15psn9');
      this.loading = false;
    }

    getSelectedRows() {
      const selectedNodes = this.agGrid.api.getSelectedNodes();
      const selectedData = selectedNodes.map( node => node.data );
      const selectedDataStringPresentation = selectedData.map( node => node.make + ' ' + node.model).join(', ');
      alert(`Selected nodes: ${selectedDataStringPresentation}`);
    }
}
