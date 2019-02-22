import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { studentReducer } from './store/reducers/reducer';

import { ReactiveFormsModule } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { FeatureModule } from './feature/feature.module';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';

import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';

// import $ from 'jquery';
import { FullCalendarModule } from 'primeng/fullcalendar';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { GetPdfService } from './shared/services/get-pdf.service';
import { BackOfficeService } from './shared/services/back-office.service';
import { ShareAgGridDataService } from './shared/services/share-ag-grid-data.service';
import { SchoolDiaryComponent } from './feature/components/school-diary/school-diary.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({
      classStudents: studentReducer
    }),
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    FeatureModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.circleSwish,
      backdropBackgroundColour: 'rgba(0, 0, 0, 0.1)',
      primaryColour: '#ff0000'
    }),
    ButtonModule,
    CalendarModule,
    FullCalendarModule,
    PdfViewerModule
  ],
  providers: [
    GetPdfService,
    BackOfficeService,
    ShareAgGridDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// platformBrowserDynamic().bootstrapModule(AppModule);
