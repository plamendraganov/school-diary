import { Component, OnInit, Input, Output, EventEmitter, Injector, ReflectiveInjector, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridNg2 } from 'ag-grid-angular';
import { GridOptions } from 'ag-grid-community';
import { Router, ActivatedRoute } from '@angular/router';
import { BackOfficeService } from 'src/app/shared/services/back-office.service';

@Component({
  selector: 'app-school-diary',
  templateUrl: './school-diary.component.html',
  styleUrls: ['./school-diary.component.scss']
})
export class SchoolDiaryComponent implements OnInit {
  @ViewChild('agGrid') agGrid: AgGridNg2;

  @Output() cellClickedEvent = new EventEmitter<any>();

  loading = false;
  startEditingValue;
	gridOptions: GridOptions;
	gridApi;
	gridColumnApi;
  rowData: any;
  pagination: boolean = true;
  isReadOnly: boolean = false;
  
  columnDefs = [
    {
      headerName: 'Class Number', 
      field: 'id', 
      sortable: true, 
      filter: true, 
      checkboxSelection: true
    },
    {
      headerName: 'First Name', 
      field: 'firstName', 
      sortable: true, 
      filter: true
    },
    {
      headerName: 'Last Name', 
      field: 'lastName', 
      sortable: true, 
      filter: true
    }
];

  constructor(
    private http: HttpClient, 
    private backOfficeService: BackOfficeService, 
    private router: Router, 
    private route: ActivatedRoute,
    public injector: Injector
    ) { }

  async ngOnInit() {
    this.loading = true;   
    this.rowData = await this.backOfficeService.getStudentsInClass();
    this.loading = false;
  }

  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map( node => node.data );
    const selectedDataStringPresentation = selectedData.map( node => node.firstName + ' ' + node.lastName).join(', ');
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
  }

  addNewStudent() {
    window.location.href = 'school-diary/new-student'
  }

  async onCellClick(event){
    if (event.data.id) {
      this.router.navigate([`./${event.data.id}`], { relativeTo:this.route })
    }
	}

}
