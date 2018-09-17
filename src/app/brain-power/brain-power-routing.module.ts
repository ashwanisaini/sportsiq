import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrainPowerComponent } from './brain-power.component';

const routes: Routes = [{
  path: '',
  component: BrainPowerComponent,
  children: [
  
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrainPowerRoutingModule { }

export const routedComponents = [
  BrainPowerComponent
];
