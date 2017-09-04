import {Injectable, Output, EventEmitter} from '@angular/core';
import {TranslateService} from 'ng2-translate/ng2-translate';
import {CommonConfigService} from "../../services/config.service";

var _ = require('lodash');

@Injectable()
export class MessagesService {

    @Output() addMessage$: EventEmitter<any> = new EventEmitter();
    public alerts: Array<any> = [];
    public lastAlertId: number = 0;



    constructor(private translateService: TranslateService,
                private configService: CommonConfigService) {
    }

    public addMessage(msg: MessageParams) {
        if (msg.message) {

            let alert: MessageParams = {
                id: this.lastAlertId,
                message: msg.message,
                type: msg.type || 'success',
                dismissible: msg.dismissible || true,
                dismissOnTimeout: msg.dismissOnTimeout
                || this.configService.commonValues.alerts.dismissOnTimeout
            };

            this.lastAlertId++;

            if (alert.dismissible) {
                alert.timeout = setTimeout(() => {
                    this.closeAlert(alert.id);
                }, alert.dismissOnTimeout);
            }

            this.alerts.push(alert);
        }
    }

    public addMessageFromMessageCode(params: MessageParams) {
        this.translateService.get(params.message, params.variables).subscribe(
            (translatedString) => {
                params.message = translatedString;
                this.addMessage(params);
            }
        );
    }

    public closeAlert(id: number) {

        let index = _.findIndex(this.alerts, {'id': id});

        if (index > -1) {
            let alert = this.alerts[index];

            if (alert.timeout) {
                clearTimeout(alert.timeout);
            }

            this.alerts.splice(index, 1);
        }
    }

    public showDangerMessage(message:string) {
      this.addMessage({
        type: 'danger',
        message: message
      });
    }

    public showDangerMessageCode(code:string) {
      this.addMessageFromMessageCode({
        type: 'danger',
        message: code
      });
    }

    public showInfoMessageCode(code:string) {
      this.addMessageFromMessageCode({
        type: 'info',
        message: code
      });
    }



}
