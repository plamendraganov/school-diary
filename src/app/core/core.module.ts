import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [CoreComponent, HeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CoreComponent,
    HeaderComponent
  ]
})
export class CoreModule { }
