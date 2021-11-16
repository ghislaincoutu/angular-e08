import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { T01Component } from './t01/t01.component';
import { T02Component } from './t02/t02.component';

const routes: Routes = [
  { path: '', redirectTo: 't01', pathMatch: 'full' },
  { path: 't01', component: T01Component },
  { path: 't02', component: T02Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
