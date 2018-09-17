import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';

const routes: Routes = [
  { path: 'frontend', loadChildren: 'app/frontend/frontend.module#FrontendModule' },
  {
    path: 'login',
    loadChildren: 'app/login/login.module#LoginModule'
  },
  {
    path: 'home',
    loadChildren: 'app/home/home.module#HomeModule'
  },
  {
    path: 'brain-power',
    loadChildren: 'app/brain-power/brain-power.module#BrainPowerModule'
  },
  {
    path: 'pricing',
    loadChildren: 'app/pricing/pricing.module#PricingModule'
  },
  {
    path: 'about',
    loadChildren: 'app/about/about.module#AboutModule'
  },
  {
    path: 'support',
    loadChildren: 'app/support/support.module#SupportModule'
  },
  {
    path: 'join/:accesstoken',
    loadChildren: 'app/register/register.module#RegisterModule'
  },
  {
    path: 'reset-password/:token',
    loadChildren: 'app/reset-password/reset-password.module#ResetPasswordModule'
  },
  {
    path: 'register',
    loadChildren: 'app/register/register.module#RegisterModule'
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({ 
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
