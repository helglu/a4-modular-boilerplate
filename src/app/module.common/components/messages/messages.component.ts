import {Component} from '@angular/core';
import {MessagesService} from './messages.service';

@Component({
    selector: 'common-messages-component',
    template: require('./messages.html'),
    styles: ['.message-component{ position: fixed; left:10%; top:30px; right:10%; z-index:9999;}']
})
export class MessagesComponent {
    constructor(protected messagesService: MessagesService) {
    }
}
