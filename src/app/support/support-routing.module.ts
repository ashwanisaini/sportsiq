import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupportComponent } from './support.component';

const routes: Routes = [{
  path: '',
  component: SupportComponent,
  children: [
  
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupportRoutingModule { }

export const routedComponents = [
  SupportComponent
];
