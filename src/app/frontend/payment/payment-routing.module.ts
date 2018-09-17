import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentComponent } from './payment.component';

const routes: Routes = [{
  path: '',
  component: PaymentComponent,
  children: [
  
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentRoutingModule { }

export const routedComponents = [
  PaymentComponent
];
