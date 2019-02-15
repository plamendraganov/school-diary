import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureComponent } from './feature.component';
import { SchoolDiaryComponent } from './components/school-diary/school-diary.component';
import { HomePageComponent } from './components/home-page/home-page.component';

@NgModule({
  declarations: [FeatureComponent, SchoolDiaryComponent, HomePageComponent],
  imports: [
    CommonModule
  ],
  exports: [
    FeatureComponent,
    HomePageComponent,
    SchoolDiaryComponent
  ]
})
export class FeatureModule { }
