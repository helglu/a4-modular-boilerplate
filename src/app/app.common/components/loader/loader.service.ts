import {Injectable, Output, EventEmitter} from '@angular/core';

@Injectable()
export class LoaderService {

    @Output() loaderBasic$: EventEmitter<any> = new EventEmitter();
    public maxRequestDuration = 120000;
    private timeout: number;
    private count: number = 0;

    constructor() {
    }

    public showHideBasic(show: boolean): void {
        this.loaderBasic$.emit(show);
    }

    public show() {
        this.count++;
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
        let t = this.timeout = setTimeout(this.hide(true), this.maxRequestDuration);

        this.showHideBasic(true);
        return t;
    }

    public hide(hard?: boolean) {

        this.count--;
        if (this.count < 1) {
            this.count = 0;
            this.showHideBasic(false);
        }
        if (hard) {
            this.count = 0;
            this.showHideBasic(false);
        }
    }
}
