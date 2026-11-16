import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'cv', pathMatch: 'full' },
  { path: 'cv', loadComponent: () => import('./pages/cv-page').then((m) => m.CvPage) },
  { path: '**', redirectTo: 'cv' },
];
