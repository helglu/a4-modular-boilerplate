/**
 * Created by Helena on 24.01.2017.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'a-home',
  template: '<h3>Application A Home</h3>'
})
export class AHomeComponent {

  constructor() {}

  ngOnInit() {
    console.log("AHomeComponent: Application A home component initialized");
  }

}
