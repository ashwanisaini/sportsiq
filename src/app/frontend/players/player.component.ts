import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'player',
  template: `
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
