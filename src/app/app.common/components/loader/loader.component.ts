import { Component } from '@angular/core';
import {LoaderService} from './loader.service';

@Component({
    selector: 'common-loader-basic',
    template: require('./loader.basic.html'),
})
export class LoaderBasicComponent {

    private showBasicLoader: boolean = false;

    constructor(protected loaderService: LoaderService) {

    }

    ngOnInit() {
        this.loaderService.loaderBasic$.subscribe(
            value => this.showBasicLoader = !!(value)
        );
    }


}
