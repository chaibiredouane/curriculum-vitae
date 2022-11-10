import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurriculumVitaeComponent } from './pages/curriculum-vitae/curriculum-vitae.component';

const routes: Routes = [
  { path: '', redirectTo: '/cv', pathMatch: 'full' },
  { path: 'cv', component: CurriculumVitaeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
