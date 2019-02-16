import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { CoreComponent } from './core.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [CoreComponent, HeaderComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    CoreComponent,
    HeaderComponent
  ]
})
export class CoreModule { }
