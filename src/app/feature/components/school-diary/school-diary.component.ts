import { Component, OnInit, Input, Output, EventEmitter, Injector, ReflectiveInjector, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridNg2 } from 'ag-grid-angular';
import { GridOptions } from 'ag-grid-community';
import { Router, ActivatedRoute } from '@angular/router';
import { BackOfficeService } from 'src/app/shared/services/back-office.service';
import { ShareAgGridDataService } from 'src/app/shared/services/share-ag-grid-data.service';
import { Observable } from 'rxjs';
import { IAppState } from 'src/app/store/models/app-state';
import { IStudentData } from 'src/app/store/models/student-data';
import { Store } from '@ngrx/store';

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
      field: 'number', 
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
    },
    {
      headerName: 'Age', 
      field: 'age', 
      sortable: true, 
      filter: true
    },
    {
      headerName: 'Address', 
      field: 'address', 
      sortable: true, 
      filter: true
    },
    {
      headerName: 'Phone Number', 
      field: 'phoneNumber', 
      sortable: true, 
      filter: true
    }
  ];

  students: Observable<IStudentData[]>

  constructor(
    private http: HttpClient, 
    private backOfficeService: BackOfficeService, 
    private router: Router, 
    private route: ActivatedRoute,
    private injector: Injector,
    private shareAgGridDataService: ShareAgGridDataService,
    private store: Store<IAppState>) { }

  async ngOnInit() {
    this.loading = true;   
    // this.rowData = await this.backOfficeService.getStudentsInClass();
    this.rowData = this.store.select(state => state.classStudents)
    this.loading = false;

    this.students = this.store.select(state => state.classStudents)
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
    this.shareAgGridDataService.agGridData = event.data;
    
    if (event.data.number) {
      this.router.navigate([`./${event.data.number}`], { relativeTo:this.route })
    }
	}

}
