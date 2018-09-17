import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { FrontendComponent } from './frontend.component';
import { CoachComponent } from './coaches/coach.component';
import { CoachDashboardComponent } from './coaches/dashboard/dashboard.component';
import { CoachProfileComponent } from './coaches/profile/profile.component';
import { InviteComponent } from './coaches/invite/invite.component';
import { CoachAssignmentComponent } from './coaches/assignment/assignment.component';
import { RosterComponent } from './coaches/roster/roster.component';
import { StatisticsComponent } from './coaches/statistics/statistics.component';
import { FeedbackComponent } from './coaches/feedback/feedback.component';
import { MessagesComponent } from './coaches/messages/messages.component';
import { CoachAuthGuard } from './guard/coach.guard';


import { PlayerComponent } from './players/player.component';
import { PlayerDashboardComponent } from './players/dashboard/dashboard.component';
import { PlayerProfileComponent } from './players/profile/profile.component';
import { PlayerAuthGuard } from './guard/player.guard';
import { PlayerAssignmentComponent } from './players/assignment/assignment.component';
import { FeedbackPlayerComponent } from './players/feedback/feedback.component';
import { MessagesPlayerComponent } from './players/messages/messages.component';
import { StatisticsPlayerComponent } from './players/statistics/statistics.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [{
  path: '',
  component: FrontendComponent,
  children: [{
    path: 'coach/dashboard',
    component: CoachDashboardComponent,
    canActivate:[CoachAuthGuard]
  },{
    path: 'coach/profile',
    component: CoachProfileComponent,
    canActivate:[CoachAuthGuard]
  },{
    path: 'coach/invite',
    component: InviteComponent,
    canActivate:[CoachAuthGuard]
  },{
    path: 'coach/invite/:team_id',
    component: InviteComponent,
    canActivate:[CoachAuthGuard]
  },{
    path: 'coach/assignments',
    component: CoachAssignmentComponent,
    canActivate:[CoachAuthGuard]
  },{
    path: 'coach/roster/:team_id',
    component: RosterComponent,
    canActivate:[CoachAuthGuard]
  },{
    path: 'coach/statistics',
    component: StatisticsComponent,
    canActivate:[CoachAuthGuard]
  },{
    path: 'coach/feedback',
    component: FeedbackComponent,
    canActivate:[CoachAuthGuard]
  },{
    path: 'coach/messages',
    component: MessagesComponent,
    canActivate:[CoachAuthGuard]
  },{
    path: 'coach/roster',
    component: RosterComponent,
    canActivate:[CoachAuthGuard]
  },
  {
    path: 'player/dashboard',
    component: PlayerDashboardComponent,
    canActivate:[PlayerAuthGuard]
  },
  {
    path: 'player/assignments',
    component: PlayerAssignmentComponent,
    canActivate:[PlayerAuthGuard]
  },
  {
    path: 'player/profile',
    component: PlayerProfileComponent,
    canActivate:[PlayerAuthGuard]
  },{
    path: 'player/feedback',
    component: FeedbackPlayerComponent,
    canActivate:[PlayerAuthGuard]
  },{
    path: 'player/messages',
    component: MessagesPlayerComponent,
    canActivate:[PlayerAuthGuard]
  },{
    path: 'player/statistics',
    component: StatisticsPlayerComponent,
    canActivate:[PlayerAuthGuard]
  },
  {
    path: 'payment',
    component: PaymentComponent,    
  }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[CoachAuthGuard,PlayerAuthGuard]
})
export class FrontendRoutingModule {
}

export const routedComponents = [
   CoachDashboardComponent,   
   CoachProfileComponent,  
   InviteComponent,
   CoachAssignmentComponent,
   RosterComponent,
   StatisticsComponent,
   FeedbackComponent,
   PlayerDashboardComponent,
   PlayerProfileComponent,
   PlayerAssignmentComponent,
   PaymentComponent,
   MessagesComponent,
   FeedbackPlayerComponent,
   MessagesPlayerComponent,
   StatisticsPlayerComponent
];