import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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

import { FullCalendarModule } from 'primeng/fullcalendar';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
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
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// platformBrowserDynamic().bootstrapModule(AppModule);
