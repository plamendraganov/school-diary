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
    loading = false;

    pdfSrc: string = '';

  

    constructor(private http: HttpClient, private getPdfService: GetPdfService) { }

    async ngOnInit() {
      this.loading = true;  
      this.pdfSrc = await this.getPdfService.getPdf();
      this.loading = false;
    }
}
