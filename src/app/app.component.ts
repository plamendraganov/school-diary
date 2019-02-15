import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridNg2 } from 'ag-grid-angular';
import { GetPdfService } from './shared/services/get-pdf.service';

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

    pdfSrc: string = '';

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
    events: any[];

    constructor(private http: HttpClient, private getPdfService: GetPdfService) {

    }

    async ngOnInit() {
      this.loading = true;  
      this.rowData = this.http.get('https://api.myjson.com/bins/15psn9');
      this.pdfSrc = this.getPdfService.getPdf();
      this.loading = false;

      this.events = [
        {
          "title": "All Day Event",
          "start": "2019-02-02"
        },
        {
          "title": "Long Event",
          "start": "2019-02-05",
          "end": "2019-02-07"
        }
      ]
    }

    getSelectedRows() {
      const selectedNodes = this.agGrid.api.getSelectedNodes();
      const selectedData = selectedNodes.map( node => node.data );
      const selectedDataStringPresentation = selectedData.map( node => node.make + ' ' + node.model).join(', ');
      alert(`Selected nodes: ${selectedDataStringPresentation}`);
    }
}
