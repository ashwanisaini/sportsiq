import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { AdsComponent } from './ads.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdsRoutingModule { }

export const routedComponents = [
  //AdsComponent
];
