import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchoolDiaryComponent } from './feature/components/school-diary/school-diary.component';
import { HomePageComponent } from './feature/components/home-page/home-page.component';

const routes: Routes = [
  {
    path: '', component: HomePageComponent, children: [
      { path: 'home', component: HomePageComponent },
      { path: 'school-diary', component: SchoolDiaryComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
