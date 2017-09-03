/**
 * Created by Helena on 24.01.2017.
 */

import { Component } from '@angular/core';
import {AAuthService} from "../../services/a.auth.service";

@Component({
  selector: 'a-home',
  templateUrl: './a.home.html'
})
export class AHomeComponent {

  constructor(private authService: AAuthService) {}

  ngOnInit() {
    console.log("AHomeComponent: Application A home component initialized");
  }

}
