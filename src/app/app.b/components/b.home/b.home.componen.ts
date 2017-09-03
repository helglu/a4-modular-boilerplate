/**
 * Created by Helena on 24.01.2017.
 */

import { Component } from '@angular/core';
import {BAuthService} from "../../services/b.auth.service";

@Component({
  selector: 'b-home',
  templateUrl: './b.home.html'
})
export class BHomeComponent {

  constructor(private authService: BAuthService) {}

  ngOnInit() {
    console.log("BHomeComponent: Application B home component initialized");
  }

}
