/**
 * Created by Helena on 24.01.2017.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'b-home',
  template: '<h3>Application B Home</h3>'
})
export class BHomeComponent {

  constructor() {}

  ngOnInit() {
    console.log("BHomeComponent: Application A home component initialized");
  }

}
