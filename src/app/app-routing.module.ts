import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchoolDiaryComponent } from './feature/components/school-diary/school-diary.component';
import { HomePageComponent } from './feature/components/home-page/home-page.component';
import { NotesComponent } from './feature/components/notes/notes.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'school-diary', component: SchoolDiaryComponent },
  { path: 'notes', component: NotesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
