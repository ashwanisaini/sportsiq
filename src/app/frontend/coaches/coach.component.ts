import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'coach',
  template: `
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./coach.component.scss']
})
export class CoachComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
